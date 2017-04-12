'use strict';

module.exports = function () {
  this.Then('I can see the administration menu', () => this.ui.drawer.administration.isVisible().should.be.true);

  // XXX: this.ui.drawer.administration.click()
  this.When('I click "$text" in the administration menu', (text) => driver.click(`a=${text}`));

  this.Then('I can see the analytics page', () =>
    this.ui.administration.analytics.isVisible().should.be.true);

  this.Then('I can see the users and groups page', () =>
    this.ui.administration.userAndGroupManagement.isVisible().should.be.true);

  this.Then('I can see the vocabulary page', () =>
    this.ui.administration.vocabularyManagement.isVisible().should.be.true);
};
