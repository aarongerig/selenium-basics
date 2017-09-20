const selenium = require('selenium-webdriver');
const driver = new selenium.Builder()
  .forBrowser('chrome')
  .build();

// Pages
const HomePage = require('./pages/home');
const homePage = new HomePage(driver);
homePage.open();
homePage.exec();
