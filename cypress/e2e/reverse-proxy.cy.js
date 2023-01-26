/// <reference types="cypress" />

describe("Reverse proxy - 200 rewrite", () => {
  const sourceUri = "/images/testing.jpg";
  const destinationUri = "https://images.otherdomain.com/testing.jpg";
  it(`should redirect ${sourceUri} to ${destinationUri}`, () => {
    cy.visit(sourceUri);
    cy.url().should("equal", destinationUri);
  });
  it(`${sourceUri} should return status code 200`, () => {
    cy.request({
      url: sourceUri,
      followRedirect: false, // turn off following redirects
    }).then((resp) => {
      // redirect status code is 200
      expect(resp.status).to.eq(200);
    });
  });
});
