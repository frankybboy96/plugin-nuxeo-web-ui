import {
  Then,
  When,
} from 'cucumber';

When(/^I select user from the dropdown menu$/, function () {
  this.ui.user.dropdown.waitForVisible();
  this.ui.user.userItem.click();
});

When(/^I can see the new user form$/, function () {
  this.ui.user.createUserForm.waitForVisible();
});

Then(/^I can create a user with the following properties:$/, function (table) {
  this.ui.user.fillMultipleValues(table, this.ui.user.createUserDialog);
  this.ui.user.createUserButton.click();
});

Then(/^I can search for the user "([^"]*)"$/, function (username) {
  this.ui.user.searchFor(username);
  this.ui.user.searchResult(username).waitForVisible().should.be.true;
});

Then(/^I can edit the user "([^"]*)" with the following properties:$/, function (username, table) {
  this.ui.user.searchFor(username);
  this.ui.user.searchResult(username).waitForVisible();
  this.ui.user.searchResult(username).click();
  this.ui.user.editUserButton.waitForVisible();
  this.ui.user.editUserButton.click();
  this.ui.user.fillMultipleValues(table, this.ui.user.editUserDialog);
  this.ui.user.editUserDialogButton.click();
});

Then(/^I can delete the user "([^"]*)"$/, function (username) {
  this.ui.user.searchFor(username);
  this.ui.user.searchResult(username).waitForVisible();
  this.ui.user.searchResult(username).click();
  this.ui.user.deleteUserButton.waitForVisible();
  this.ui.user.deleteUserButton.click();
  this.ui.user.confirmDeleteUserButton.click();
});
