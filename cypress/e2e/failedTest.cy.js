//This test spec is to show a failed run to show screenshot and failed report
describe("Authentication Suites", () => {
  beforeEach(() => {
    cy.visit("/") 
    cy.url().should("include", "saucedemo") 
  }) 
  // Temporarily skipped, will run only to demonstrate failure scenario."
  it.skip("Will run only to demonstrate failure scenario", () => {
    cy.c_login({ username: "successlogin", password: "password" }) 
    cy.get("input[id=login-button1]").click() 
    cy.log("User logged in successfully") 
  }) 
}) 
