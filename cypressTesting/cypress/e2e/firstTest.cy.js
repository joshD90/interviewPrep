describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173");

    cy.get("h1").should("have.text", "Hello Cypress");
  });
});
