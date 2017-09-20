const selenium = require('selenium-webdriver');
const By = selenium.By;

const driver = new selenium.Builder()
  .forBrowser('chrome')
  .build();
const url = 'https://www.shl.ch/de-ch/ueber-uns/kontakt';

driver.get(url);

const locators = {
  doubleContent: By.className('shl-double-content'),
  toggleButton: By.css('a[data-uk-toggle]'),
  inquiryForm: By.className('inquiry-form'),
  textarea: By.css('.inquiry-form input[name="inquiryRemark"]')
};

function mutateTextarea(text) {
  driver.findElement(locators.textarea)
    .sendKeys(text);
  driver.findElement(locators.inquiryForm).submit();
}

mutateTextarea('Muahhahaha!');
mutateTextarea('Blah blah!');
