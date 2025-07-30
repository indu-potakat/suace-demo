export function errorMessageIsDisplayed(key) {
  //const message = getErrorMessage(key) 
  const message = Cypress.env('messages')[key]
  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('have.text', message) 
cy.log('The error displayed is : ' + message)
}
export function formErrorMessageIsDisplayed(key) {
  //const message = getErrorMessage(key) 
  const message = Cypress.env('messages')[key]
  cy.get('h3[data-test=error]')
    .should('be.visible')
    .and('have.text', message) 
cy.log('The error displayed is : ' + message)
}

export function validateURL(key) {
  //const message = getErrorMessage(key) 
  const url = Cypress.env('redirectUrls')[key]
    cy.url().should('equal', url)    
cy.log('The redirected URL is : ' + url)
}