const { chromium } = require("playwright");

const viewports = [
  { name: "Small Phone", width: 320, height: 720 },
  { name: "Phone", width: 375, height: 812 },
  { name: "Large Phone", width: 430, height: 932 },
  { name: "Tablet", width: 768, height: 1024 },
  { name: "Small Laptop", width: 1024, height: 768 },
  { name: "Desktop", width: 1366, height: 900 },
  { name: "Large Desktop", width: 1920, height: 1080 },
];

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ["--disable-dev-shm-usage", "--no-zygote"]
  });

  const page = await browser.newPage();
  const errors = [];

  page.on("pageerror", error => errors.push(error.message));

  await page.goto("http://127.0.0.1:4173/", {
    waitUntil: "domcontentloaded",
    timeout: 30000
  });

  await page.waitForTimeout(1500);

  console.log("\n========== RESPONSIVE AUDIT ==========");

  for (const item of viewports) {
    await page.setViewportSize({
      width: item.width,
      height: item.height
    });

    await page.waitForTimeout(250);

    const result = await page.evaluate(() => ({
      viewport: innerWidth,
      document: document.documentElement.scrollWidth,
      body: document.body.scrollWidth,
      sections: document.querySelectorAll("main section").length,
      images: document.querySelectorAll("img").length
    }));

    const status = result.document <= item.width + 1 ? "PASS" : "OVERFLOW";

    console.log(
      `${status} | ${item.name} | ${item.width}px | Document: ${result.document}px | Sections: ${result.sections} | Images: ${result.images}`
    );
  }

  console.log("\n========== JAVASCRIPT ERRORS ==========");
  console.log(errors.length ? errors : "No JavaScript errors detected");

  await browser.close();
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
