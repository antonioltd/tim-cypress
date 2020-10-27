export const clickOn = (element, force = false) => {
  element.should("be.visible");
  element.click({ force: force });
};

export const writeOn = (element, value) => {
  element.should("be.visible");
  element.clear();
  element.type(value);
};

export const hoverOn = (element) => {
  element.should("be.visible");
  element.trigger("mouseover");
};

export const waitForLoader = () => {
  cy.get("[class^='Loader_animation']", { timeout: 60000 }).should(
    "not.be.visible"
  );
};
