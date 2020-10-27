/// <reference types="Cypress" />
import { Home } from "../../../Pages";
import "cypress-xpath";

beforeEach(() => {
  cy.visit(Cypress.env("test"));
});
context("[Home page] some home page test", () => {
  specify("--should return error message", () => {
    Home
      .clickOnSignInLink()
      .setEmailAddress("test@test.com")
      .setPassword("P@$$w0rd")
      .clickOnSignInButton();
    cy.xpath("//p[text()='There is 1 error']").should("be.visible");
  });
});
