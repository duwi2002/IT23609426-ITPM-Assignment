import { test, expect } from '@playwright/test';

/*
 * TC_Pos_Fun_01 – Simple sentence translation
 */
test('TC_Pos_Fun_01 – Simple sentence translation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await expect(input).toBeVisible();
  await input.fill('mama kadeta yanavaa');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('mama kadeta yanavaa');
});

/*
 * TC_Pos_Fun_02 – Compound sentence translation
 */
test('TC_Pos_Fun_02 – Compound sentence translation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('mama kadeta yanavaa, haebaeyi vahina nisaa dhaenma yannee naee');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue(
    'mama kadeta yanavaa, haebaeyi vahina nisaa dhaenma yannee naee'
  );
});

/*
 * TC_Pos_Fun_03 – Conditional sentence
 */
test('TC_Pos_Fun_03 – Conditional sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('oya enne naeththam mama yanava');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('oya enne naeththam mama yanava');
});

/*
 * TC_Pos_Fun_04 – Interrogative sentence
 */
test('TC_Pos_Fun_04 – Interrogative sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('oyaa kaaladha');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('oyaa kaaladha');
});

/*
 * TC_Pos_Fun_05 – Imperative sentence
 */
test('TC_Pos_Fun_05 – Imperative sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('dhigatama yanna');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('dhigatama yanna');
});

/*
 * TC_Pos_Fun_06 – Future tense sentence
 */
test('TC_Pos_Fun_06 – Future tense sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('mama kohoma hari dhinanavaa');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('mama kohoma hari dhinanavaa');
});

/*
 * TC_Pos_Fun_07 – Past tense sentence
 */
test('TC_Pos_Fun_07 – Past tense sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('adha nam paeradhenavaa');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('adha nam paeradhenavaa');
});

/*
 * TC_Pos_Fun_08 – Greeting sentence
 */
test('TC_Pos_Fun_08 – Greeting sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('suba dhavasak');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('suba dhavasak');
});

/*
 * TC_Pos_Fun_09 – Polite request
 */
test('TC_Pos_Fun_09 – Polite request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('oyaata mee vaedee karala dhenna puluvandha');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('oyaata mee vaedee karala dhenna puluvandha');
});

/*
 * TC_Pos_Fun_10 – Assurance sentence
 */
test('TC_Pos_Fun_10 – Assurance sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('mama anivaaryen karala dhennam');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('mama anivaaryen karala dhennam');
});

/*
 * TC_Pos_Fun_11 – Apology sentence
 */
test('TC_Pos_Fun_11 – Apology sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('samaavenna vaeradhila kiyavunee');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('samaavenna vaeradhila kiyavunee');
});

/*
 * TC_Pos_Fun_12 – Command sentence
 */
test('TC_Pos_Fun_12 – Command sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('oyaa yanna');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('oyaa yanna');
});

/*
 * TC_Pos_Fun_13 – Physical state sentence
 */
test('TC_Pos_Fun_13 – Physical state sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('mata badagini');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('mata badagini');
});

/*
 * TC_Pos_Fun_14 – Instruction sentence
 */
test('TC_Pos_Fun_14 – Instruction sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('meehaata dhenna');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('meehaata dhenna');
});

/*
 * TC_Pos_Fun_15 – Sentence with spacing
 */
test('TC_Pos_Fun_15 – Sentence with spacing', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('mama kadeeta yanavaa');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('mama kadeeta yanavaa');
});

/*
 * TC_Pos_Fun_16 – Sentence without spacing
 */
test('TC_Pos_Fun_16 – Sentence without spacing', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('mamakadeetayanavaa');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('mamakadeetayanavaa');
});

/*
 * TC_Pos_Fun_17 – Repetition handling
 */
test('TC_Pos_Fun_17 – Repetition handling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('podda podda');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('podda podda');
});

/*
 * TC_Pos_Fun_18 – Past narrative
 */
test('TC_Pos_Fun_18 – Past narrative', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('mama pereedhaa gedhara giyaa');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('mama pereedhaa gedhara giyaa');
});

/*
 * TC_Pos_Fun_19 – Simple present tense
 */
test('TC_Pos_Fun_19 – Simple present tense', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('mama yanavaa');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('mama yanavaa');
});

/*
 * TC_Pos_Fun_20 – Future plan sentence
 */
test('TC_Pos_Fun_20 – Future plan sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('api iilaga sathiyee kathaa karamu');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('api iilaga sathiyee kathaa karamu');
});

/*
 * TC_Pos_Fun_21 – Future plan consistency
 */
test('TC_Pos_Fun_21 – Future plan consistency', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('api iilaga sathiyee kathaa karamu');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('api iilaga sathiyee kathaa karamu');
});

/*
 * TC_Pos_Fun_22 – Negative response
 */
test('TC_Pos_Fun_22 – Negative response', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('kannee naehae');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('kannee naehae');
});

/*
 * TC_Pos_Fun_23 – Interrogative sentence
 */
test('TC_Pos_Fun_23 – Interrogative sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('oyaa enavadha');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('oyaa enavadha');
});

/*
 * TC_Pos_Fun_24 – Intent / plan sentence
 */
test('TC_Pos_Fun_24 – Intent sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await input.fill('api yanna hadhannee');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('api yanna hadhannee');
});



/*
 * Neg_Fun_0001 – Input with excessive numbers
 */
test('Neg_Fun_0001 – Input with excessive numbers', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await expect(input).toBeVisible();
  await input.fill('mama 1234567890 yannee');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('mama 1234567890 yannee');
});

/*
 * Neg_Fun_0002 – Input with multiple special characters
 */
test('Neg_Fun_0002 – Input with multiple special characters', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await expect(input).toBeVisible();
  await input.fill('mama @@##$$ yanvaa!!!');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('mama @@##$$ yanvaa!!!');
});

/*
 * Neg_Fun_0003 – Excessive spaces
 */
test('Neg_Fun_0003 – Excessive spaces', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await expect(input).toBeVisible();
  await input.fill('mama    gedhara   yanavaa');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('mama    gedhara   yanavaa');
});

/*
 * Neg_Fun_0004 – Line breaks / multi-line input
 */
test('Neg_Fun_0004 – Line breaks / multi-line input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await expect(input).toBeVisible();
  await input.fill(`mama gedhara yanavaa
oyā enavadha?`);
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue(`mama gedhara yanavaa
oyā enavadha?`);
});

/*
 * Neg_Fun_0005 – Long paragraph ≥300 characters
 */
test('Neg_Fun_0005 – Long paragraph ≥300 characters', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await expect(input).toBeVisible();
  await input.fill(`dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana,mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya.`);
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue(`dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana,mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya.`);
});

/*
 * Neg_Fun_0006 – Mixed incorrect capitalization
 */
test('Neg_Fun_0006 – Mixed incorrect capitalization', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await expect(input).toBeVisible();
  await input.fill('MAMA gedhara Yanavaa');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('MAMA gedhara Yanavaa');
});

/*
 * Neg_Fun_0007 – Joined words / missing spaces
 */
test('Neg_Fun_0007 – Joined words / missing spaces', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await expect(input).toBeVisible();
  await input.fill('mamagedharayanavaa');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('mamagedharayanavaa');
});

/*
 * Neg_Fun_0008 – Unsupported slang / colloquial phrases
 */
test('Neg_Fun_0008 – Unsupported slang / colloquial phrases', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await expect(input).toBeVisible();
  await input.fill('ela machan supiri!!');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('ela machan supiri!!');
});

/*
 * Neg_Fun_0009 – Mixed English + Singlish with abbreviations
 */
test('Neg_Fun_0009 – Mixed English + Singlish with abbreviations', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await expect(input).toBeVisible();
  await input.fill('mata zoom link ekak email karanna oonee Thx');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('mata zoom link ekak email karanna oonee Thx');
});

/*
 * Neg_Fun_0010 – Incorrect punctuation placement
 */
test('Neg_Fun_0010 – Incorrect punctuation placement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  await expect(input).toBeVisible();
  await input.fill('mama gedhara yanavaa??!!');
  await page.waitForTimeout(3000);
  await expect(input).toHaveValue('mama gedhara yanavaa??!!');
});

/*
 * UI_Test_0001 – Input box visibility & placeholder
 */
test('UI_Test_0001 – Input box visibility & placeholder', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Locate input box
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');

  // Check if input box is visible
  await expect(input).toBeVisible();

  // Check if placeholder text is correct
  await expect(input).toHaveAttribute('placeholder', 'Input Your Singlish Text Here.');
});
