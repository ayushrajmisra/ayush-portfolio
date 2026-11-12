import { test, expect } from "@playwright/test";

const viewports = [
  { name: "Small phone", width: 320, height: 720 },
  { name: "Phone", width: 375, height: 812 },
  { name: "Large phone", width: 430, height: 932 },
  { name: "Tablet", width: 768, height: 1024 },
  { name: "Small laptop", width: 1024, height: 768 },
  { name: "Desktop", width: 1366, height: 900 },
  { name: "Large desktop", width: 1920, height: 1080 },
];

for (const viewport of viewports) {
  test(`${viewport.name} — ${viewport.width}px responsive audit`, async ({ page }, testInfo) => {
    const pageErrors = [];

    page.on("pageerror", error => pageErrors.push(error.message));

    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height,
    });

    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1200);

    await expect(page.locator("main")).toBeVisible();

    const imageCount = await page.locator("img").count();
    const brokenImages = [];

    for (let i = 0; i < imageCount; i++) {
      const img = page.locator("img").nth(i);

      try {
        await img.scrollIntoViewIfNeeded();
        await page.waitForTimeout(120);
        
        const result = await img.evaluate(el => ({
          src: el.currentSrc || el.src,
          loaded: el.complete && el.naturalWidth > 0,
          alt: el.alt || "(missing alt text)",
        }));

        if (!result.loaded && result.src) {
          brokenImages.push(result);
        }
      } catch {
        brokenImages.push({ index: i, issue: "Could not inspect image" });
      }
    }

    const metrics = await page.evaluate(() => ({
      viewportWidth: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      bodyWidth: document.body.scrollWidth,
      sectionCount: document.querySelectorAll("main section").length,
      imageCount: document.querySelectorAll("img").length,
      pageHeight: document.documentElement.scrollHeight,
    }));

    console.log(`\n--- ${viewport.name} (${viewport.width}px) ---`);
    console.log(JSON.stringify({
      ...metrics,
      brokenImages,
      pageErrors,
    }, null, 2));

    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({
      path: testInfo.outputPath(`responsive-${viewport.width}.png`),
      fullPage: true,
      animations: "disabled",
    });

    expect(
      metrics.documentWidth,
      `Horizontal overflow at ${viewport.width}px`
    ).toBeLessThanOrEqual(viewport.width + 1);

    expect(
      brokenImages,
      `Broken images at ${viewport.width}px`
    ).toHaveLength(0);

    expect(
      pageErrors,
      `JavaScript errors at ${viewport.width}px`
    ).toHaveLength(0);
  });
}
