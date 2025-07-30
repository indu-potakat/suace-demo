// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('c_login', ({ username, password }) => {
  const creds = Cypress.env('credentials')     
  let actualUsername, actualPassword
  if (username) {
    actualUsername = creds?.test?.[username]?.ID || username
    cy.log('Username is: ' + actualUsername)
    cy.get('input[id=user-name]').type(actualUsername)
  }

  if (password) {
    // If it's a key in Cypress.env, use that  else, use it directly
    actualPassword = Cypress.env(password) || password
    cy.log('Password is: ' + actualPassword)
    cy.get('input[id=password]').type(actualPassword, { log: false }) // Don't log password visibly
  }

//   const actualUsername = creds.test[username].ID     
//   const actualPassword = Cypress.env(password)     

//   cy.log('Username is: ' + actualUsername)     
//   cy.get('input[id=user-name]').type(actualUsername)     
//   cy.get('input[id=password]').type(actualPassword)     
})     
Cypress.Commands.add('clickLoginButton',() => {
        cy.get('input[id=login-button]').click()
    })

  Cypress.Commands.add('setViewportFor', (viewport) => {
  if (viewport === 'mobile') {
    cy.viewport('iphone-xr');
  } else if (viewport === 'desktop') {
    cy.viewport('macbook-16');
  }
})


    // in commands.js or utils.js

