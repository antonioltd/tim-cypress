import { clickOn, waitForLoader, writeOn } from "../actionUtil";
import ContactUsPage from "./ContactUsPage";
import SingInPage from "./SingInPage";

export default class HomePage {
  getContactUsLink() {
    return cy.get("[title='Contact Us']");
  }
  getSignInLink() {
    return cy.get("[title='Log in to your customer account']");
  }

  clickOnSignInLink() {
    clickOn(this.getSignInLink());
    return new SingInPage();
  }

  clickOnContactUsLink() {
    clickOn(this.getContactUsLink());
    return new ContactUsPage();
  }
}
