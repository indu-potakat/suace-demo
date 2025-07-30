// This test spec validates the login form 
import menuPage from "../support/pages/menuPage.js"
import { errorMessageIsDisplayed } from '../support/utils'
const supportedViewports = ['desktop', 'mobile']
supportedViewports.forEach((viewport) => {
describe(`Authentication Suites - ${viewport}`, () => {
    beforeEach(() => {
      cy.visit('/') 
      cy.setViewportFor(viewport)  
      cy.url().should('include', 'saucedemo')  
    })
    // Verify that the user is successfully logged in when valid credentials are provided
    it('Verify Successful Login with Valid Credentials', () => {  
        cy.c_login({ username: 'successlogin', password: 'password' }) 
        cy.clickLoginButton () 
        cy.log('User logged in successfully')
    })
    // Verify that the user is successfully logged out and redirected to the login page
    it('Verify Successful Logout Functionality', () => {
      cy.c_login({ username: 'successlogin', password: 'password' })
      cy.clickLoginButton () 
      cy.log('User logged in successfully')
      menuPage.clickOpenMenu()  
      menuPage.clickLogoutMenu()  
      cy.url().should('equal', (Cypress.config('baseUrl')))
      cy.log('User logged out successfully')
     })  
     // Ensure that login is unsuccessful and an appropriate error message is displayed when the username field is left empty
    it('Verify Login Fails When Username Field Is Empty', () => {
      cy.c_login({password: 'password' })  
      cy.clickLoginButton () 
      errorMessageIsDisplayed('msg_empty_username')
    }) 
    // Ensure that login is unsuccessful and an appropriate error message is displayed when the password field is left empty
    it('Verify Login Fails When Password Field Is Empty', () => {
      cy.c_login({ username: 'successlogin'})
      cy.clickLoginButton ()   
      errorMessageIsDisplayed('msg_empty_password') 
    }) 
    // Ensure that login is unsuccessful and relevant error messages are displayed when both username and password fields are left empty
    it('Verify Login Fails When All Fields Are Empty', () => {
      cy.clickLoginButton ()   
      errorMessageIsDisplayed('msg_empty_username')  
    })
    // Ensure that login is unsuccessful and a specific error message is shown when attempting to log in with a locked out user account
    it('Verify Login Fails for Locked Out User Account', () => {
      cy.c_login({ username: 'lockedoutuser', password: 'password' })
      cy.clickLoginButton ()      
      errorMessageIsDisplayed('msg_locked_out') 
    })
})
})