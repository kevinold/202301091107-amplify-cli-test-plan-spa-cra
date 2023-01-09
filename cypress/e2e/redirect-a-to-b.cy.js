/// <reference types="cypress" />

describe("301 redirects", () => {
  it("should redirect /a to /b", () => {
    cy.visit("/a");
    //cy.getBySel("content").should("have.text", "This is the B route");
  });
});
