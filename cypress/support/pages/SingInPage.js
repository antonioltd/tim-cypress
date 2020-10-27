import { clickOn, waitForLoader, writeOn } from "../actionUtil";

export default class SingInPage {
  getEmailAddressField() {
    return cy.get("#email");
  }

  getPasswordField() {
    return cy.get("#passwd");
  }

  getSignInButton(){
    return cy.get("#SubmitLogin");
  }
  setEmailAddress(email) {
    writeOn(this.getEmailAddressField(), email);
    return this;
  }

  setPassword(password) {
    writeOn(this.getPasswordField(), password);
    return this;
  }

  clickOnSignInButton(){
    clickOn(this.getSignInButton());
  }
}
