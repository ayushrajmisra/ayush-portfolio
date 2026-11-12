const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ["--disable-dev-shm-usage", "--no-zygote"]
  });

  try {
    const page = await browser.newPage({
      viewport: { width: 390, height: 844 },
      reducedMotion: "reduce"
    });

    await page.goto("http://127.0.0.1:4173/", {
      waitUntil: "domcontentloaded"
    });

    await page.addStyleTag({
      content: "*,*::before,*::after{animation:none!important;transition:none!important}"
    });

    const header = page.locator("header");
    const toggle = header.locator('button[aria-label="Toggle navigation menu"]');

    await toggle.click();

    const opened = await toggle.getAttribute("aria-expanded");
    const menuLink = header.locator('a[href="#community"]').last();

    const linkVisible = await menuLink.isVisible();
    if (!linkVisible) throw new Error("Mobile menu link is not visible");

    await menuLink.click();
    await page.waitForTimeout(300);

    const closed = await toggle.getAttribute("aria-expanded");

    console.log("Mobile menu opened:", opened);
    console.log("Mobile link visible:", linkVisible);
    console.log("Mobile menu closed after click:", closed);
    console.log("URL:", page.url());

    if (opened !== "true" || closed !== "false") {
      throw new Error("Mobile navigation interaction failed");
    }

    await page.setViewportSize({ width: 1366, height: 900 });

    const desktopVisible = await header.locator('nav a[href="#about"]').first().isVisible();
    const mobileButtonHidden = !(await toggle.isVisible());

    console.log("Desktop navigation visible:", desktopVisible);
    console.log("Mobile menu button hidden:", mobileButtonHidden);

    if (!desktopVisible || !mobileButtonHidden) {
      throw new Error("Desktop navigation check failed");
    }

    console.log("\nNAVIGATION AUDIT PASSED");
  } finally {
    await browser.close();
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
