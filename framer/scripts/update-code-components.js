const puppeteer = require('puppeteer-core');
const fs = require('fs-extra');
const path = require('path');

const isProp = process.argv.includes('--prod');

function getFileTree(sourceUrl) {
  const returnObj = [];
  const files = fs.readdirSync(sourceUrl);

  files.forEach((file) => {
    const url = path.join(sourceUrl, file);

    if (!url.match(/node_modules|\.git$|\.gitconfig/gm)) {
      if (fs.lstatSync(url).isDirectory()) {
        returnObj.push(...getFileTree(url));
      } else {
        returnObj.push(url);
      }
    }
  });

  return returnObj;
}

const codeDir = path.join(__dirname, '../code');

const fileList = getFileTree(codeDir);

const pageUrl = 'https://framer.com/projects/nD9DUxzEooUOlAdeVwbQ-bKTW7';

const auth = fs.readJsonSync(path.join(__dirname, 'auth.json'));

const account = auth.account;
const password = auth.password;

(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: false,
  });

  const page = await browser.newPage();

  const waitForClick = async (selector) => {
    await page.waitForSelector(selector);
    await page.click(selector);
  };

  async function clickCreateComponentAndConfirm(componentName) {
    console.log('click create code file button');
    await waitForClick(
      '.wrapper_wvvgte7 > .stack_s1yzp6zb > .stackGap_s1n8l1x5 > .button_b1rdbf0o > .truncateWithEllipsis_t1295uka',
    );

    console.log('click Component name text field');
    await waitForClick(
      '.stack_s1yzp6zb > .stackGap_s1n8l1x5 > .stack_s1yzp6zb > .stackGap_s1n8l1x5 > .textInputSharedStyles_tarvkue',
    );

    console.log('click Component name text field');
    await page.keyboard.type(componentName);

    console.log('Click Create');
    await waitForClick(
      '.stackGap_s1n8l1x5 > .stack_s1yzp6zb > .stackGap_s1n8l1x5 > .buttonPrimary_b1oc7bld > .translate',
    );
  }

  async function replaceAllContent(content) {
    console.log('Click Content');
    await waitForClick(
      '.overflow-guard > .monaco-scrollable-element > .lines-content > .view-lines',
    );

    await page.keyboard.down('Meta');
    await page.keyboard.press('A');
    await page.keyboard.up('Meta');
    await page.keyboard.press('Backspace');

    await page.keyboard.sendCharacter(content);
  }

  async function toCodeComponentBlock() {
    // wait one min for js ready
    await waitForClick(
      '.headerActions_h161tq0v > .dropDown_d1ldgwf8.dropdown_dp446hd',
    );

    await page.waitForTimeout(1000);
    await waitForClick('.dark > .menu-fisso li:nth-child(2)');
  }

  await page.goto(pageUrl);
  await page.setViewport({ width: 1920, height: 968 });

  await waitForClick('div > .sc-fzppAM > div > .sc-fzoXzr > .label');

  await page.waitForNavigation();
  console.log('into google login');

  await waitForClick('#identifierId');
  await page.keyboard.type(`${account}@ringcentral.com`);

  await waitForClick(
    '.qhFLie > #identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d',
  );

  await page.waitForNavigation();
  await page.waitForNavigation();

  await waitForClick('input[name="username"]');
  await page.keyboard.type(account);

  await page.waitForTimeout(500);
  await waitForClick('input[name="password"]');
  await page.keyboard.type(password);

  await page.waitForSelector('#okta-signin-submit');
  await page.click('#okta-signin-submit');

  await page.waitForNavigation();

  await page.waitForTimeout(1000);
  console.log('click send button');
  await waitForClick('.button.button-primary');

  await page.waitForNavigation();
  await page.waitForNavigation();

  console.log('click google continue button');
  await waitForClick('button[type="button"]');

  await page.waitForNavigation();

  console.log('go into framer');
  await toCodeComponentBlock();

  await page.waitForSelector(
    `.content_csqh01q > .scroll_shr89u9 > div > div:nth-child(1) > div`,
  );
  // make sure you have at latest one code component
  const componentNames = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        '.content_csqh01q > .scroll_shr89u9 > div > div',
      ),
      (element) => element.textContent,
    ),
  );

  const patchComponentContent = async (name, content) => {
    const index = componentNames.findIndex((x) => x === `${name}.tsx`);

    if (index !== -1) {
      const toIndex = index + 1;
      await waitForClick(
        `.content_csqh01q > .scroll_shr89u9 > div > div:nth-child(${toIndex}) > div`,
      );
    } else {
      await clickCreateComponentAndConfirm(name);
    }

    await replaceAllContent(content);
  };

  for (const filePath of fileList) {
    const result = path.parse(filePath);

    const name = result.name.replace('.framer', '');
    const file = fs.readFileSync(filePath);
    const content = file
      .toString()
      .replace(
        '../src',
        isProp
          ? 'https://ringcentral.github.io/juno/index.js'
          : 'http://127.0.0.1:8000/index.js',
      );
    await patchComponentContent(name, content);
  }
})();
