import { ProductsList } from "../support/pages/productListpage.js" 
const productsList = new ProductsList() 
Cypress.Commands.add("c_login", ({ username, password }) => {
  const creds = Cypress.env("credentials") 
  let actualUsername, actualPassword 
  if (username) {
    actualUsername = creds?.test?.[username]?.ID || username 
    cy.log("Username is: " + actualUsername) 
    cy.get("input[id=user-name]").type(actualUsername) 
  }
  if (password) {
    actualPassword = Cypress.env(password) || password 
    cy.log("Password is: " + actualPassword) 
    cy.get("input[id=password]").type(actualPassword, { log: false })  // Don't log password visibly
  }
}) 
Cypress.Commands.add("clickLoginButton", () => {
  cy.get("input[id=login-button]").click() 
}) 

Cypress.Commands.add("setViewportFor", (viewport) => {
  if (viewport === "mobile") {
    cy.viewport("iphone-xr") 
  } else if (viewport === "desktop") {
    cy.viewport("macbook-16") 
  }
}) 

Cypress.Commands.add("addtoCart", (productId) => {
  productsList.verfiyAddToCart(productId) 
  productsList.clickAddToCart(productId) 
}) 
Cypress.Commands.add("removeFromcart", (productId) => {
  productsList.verifyRemoveButton(productId) 
  productsList.clickRemove(productId) 
}) 
