/// <reference types="cypress" />

describe("Form", () => {
  it("Successfully loads", () => {
    cy.visit("http://localhost:3000");
  });

  it("Fill the form", () => {
    cy.get("[data-test=input-first-name]").type("Camila");
    cy.get("[data-test=input-first-name]").should("have.value", "Camila");

    cy.get("[data-test=input-last-name]").type("Araldi");
    cy.get("[data-test=input-last-name]").should("have.value", "Araldi");

    cy.get("[data-test=input-email]").type("baby@yoda.com");
    cy.get("[data-test=input-email]").should("have.value", "baby@yoda.com");

    cy.get("[data-test=input-password]").type("123456");
    cy.get("[data-test=input-password]").should("have.value", "123456");

    cy.get("[data-test=button-submit]").click();
    cy.get("[data-test=input-first-name]").should("not.have.value", "Camila");
  });
});
