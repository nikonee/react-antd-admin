import puppeteer from 'puppeteer';

describe('Login', () => {
  it('should login with failure', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.type('#userName', 'mockuser');
    await page.type('#password', 'wrong_password');
    await page.click('button[type="submit"]');
    await page.waitForSelector('.ant-alert-error');
    await page.close();
    browser.close();
  });
});
