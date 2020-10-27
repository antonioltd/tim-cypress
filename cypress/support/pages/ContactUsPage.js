import { clickOn, writeOn } from "../actionUtil";

export default class ContactUsPage {
  getEmailAddressField() {
    return cy.get("#email");
  }
  getOrderReferenceField() {
    return cy.get("#id_order");
  }

  getSendButton() {
    return cy.get("#submitMessage");
  }

  setEmailAddress(email) {
    writeOn(this.getEmailAddressField(), email);
    return this;
  }

  setOrderReference(reference) {
    writeOn(this.getOrderReferenceField(), reference);
    return this;
  }
  clickOnSendButton() {
    clickOn(this.getSendButton());
  }
}
