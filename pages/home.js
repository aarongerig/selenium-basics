const By = require('selenium-webdriver').By;

class HomePage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'https://www.shl.ch/de-ch';
    this.locators = {
      lightboxLink: By.css('div[data-uk-lightbox] .shl-image-link')
    }
  }

  open() {
    this.driver.get(this.url);
  }

  exec() {
    setTimeout(() => {
      this.driver.findElement(this.locators.lightboxLink).click();
    }, 5000);
  }
}

module.exports = HomePage;
