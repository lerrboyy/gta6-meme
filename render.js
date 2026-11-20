const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    executablePath: '/home/hatch/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome'
  });
  const page = await browser.newPage({
    viewport: { width: 1024, height: 1024 }
  });
  await page.goto('file:///home/hatch/workspace/makefun/gta6-meme-x-01/meme.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/home/hatch/workspace/makefun/gta6-meme-x-01/meme.png', fullPage: false });
  await browser.close();
})().catch(err => {
  console.error(err);
  process.exit(1);
});
