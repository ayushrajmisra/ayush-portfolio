const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ["--disable-dev-shm-usage", "--no-zygote"]
  });

  const page = await browser.newPage({
    viewport: { width: 1366, height: 900 },
    reducedMotion: "reduce"
  });

  const errors = [];

  page.on("pageerror", error => errors.push(error.message));

  await page.goto("http://127.0.0.1:4173/", {
    waitUntil: "domcontentloaded",
    timeout: 30000
  });

  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
        scroll-behavior: auto !important;
      }
    `
  });

  await page.waitForTimeout(1500);

  const results = await page.locator("img").evaluateAll(async images => {
    return await Promise.all(images.map(async img => {
      if (img.loading === "lazy") img.loading = "eager";

      if (!img.complete) {
        await new Promise(resolve => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", resolve, { once: true });
          setTimeout(resolve, 10000);
        });
      }

      return {
        alt: img.alt || "(No alt text)",
        loaded: img.complete && img.naturalWidth > 0,
        width: img.naturalWidth,
        src: img.currentSrc || img.src
      };
    }));
  });

  console.log("\n========== IMAGE AUDIT ==========");

  results.forEach(img => {
    console.log(
      `${img.loaded ? "PASS" : "FAIL"} | ${img.alt} | ${img.width}px`
    );
  });

  console.log("\n========== SUMMARY ==========");
  console.log({
    total: results.length,
    loaded: results.filter(img => img.loaded).length,
    broken: results.filter(img => !img.loaded).length
  });

  console.log("JavaScript errors:", errors.length ? errors : "None");

  await browser.close();
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
