/// <reference types="Cypress" />
import "cypress-xpath";
import { ContactUs, Home } from "../../../Pages";

beforeEach(() => {
  cy.visit(Cypress.env("test"));
});
context("[Contact Us page] some contact us page test", () => {
  specify("--should return error message", () => {
    Home
      .clickOnContactUsLink()
      .setEmailAddress("test@test.com")
      .setOrderReference("123abc")
      .clickOnSendButton();
    cy.xpath("//p[text()='There is 1 error']").should("be.visible");
  });
});
