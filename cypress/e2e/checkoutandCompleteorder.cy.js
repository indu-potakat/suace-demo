//This spec checksout cart and comeplete orders 
import {ProductsList, CheckOut, CartPage, Overview, CompleteOrder} from "../support/pages/productListpage.js" 
import { formErrorMessageIsDisplayed, validateURL } from '../support/utils.js' 
const productsList = new ProductsList()  
const cartPage = new CartPage()         
const checkOut = new CheckOut() 
const overview = new Overview()
const completeOrder = new CompleteOrder
const supportedViewports = ['desktop', 'mobile']

supportedViewports.forEach((viewport) => {
describe(`Cart Suite - ${viewport}`, () => {

  beforeEach(() => {
    cy.visit('/')
    cy.setViewportFor(viewport) 
    cy.c_login({ username: 'successlogin', password: 'password' })
    cy.clickLoginButton ()  
  })
  // Ensure that clicking the cart icon redirects the user to the cart page and displays the correct UI elements and cart items
 it('Verify Cart Page Displays Successfully on Clicking the Cart Icon', () => { 
    productsList.clickCartIcon()
    cartPage.verifyCartTitleIsDisplayed()
  })
  // Ensure that a product added to the cart can be successfully removed from the cart page and the cart updates accordingly
    it('Verify Successful Removal of a Product from Cart Page After Adding to Cart', () => {
    productsList.clickAddToCart()     
    productsList.clickCartIcon()     
    cartPage.clickRemoveButton()     
    cartPage.verifyProductListIsNotDisplayed()     
  })
  // Add a product to the cart, proceed to checkout, and verify that the checkout page is displayed with expected elements
    it('Add Item to Cart and Verify Checkout Page', () => {
    productsList.clickAddToCart()
    productsList.clickCartIcon()
    cartPage.verifyCartTitleIsDisplayed()
    cartPage.verifyProductListIsDisplayed()  
    cartPage.clickCheckout()  
    checkOut.verifyCheckoutPageTitle()
    checkOut.verifyContinuebtnIsvisble()
    checkOut.verifyCancelbtnIsvisble()

  })
  it('Validate Checkout Your Informatiom Form', () => { 
    productsList.clickAddToCart()
    productsList.clickCartIcon()
    cartPage.verifyCartTitleIsDisplayed()
    cartPage.verifyProductListIsDisplayed()  
    cartPage.clickCheckout() 
    checkOut.verifyCheckoutPageTitle()
    checkOut.verifyContinuebtnIsvisble()
    checkOut.verifyCancelbtnIsvisble()
    checkOut.clickbtnContinue()
    //Your information form validation
    formErrorMessageIsDisplayed('msg_empty_firstname') 
    checkOut.inputFirstName('Firstname')
    checkOut.clickbtnContinue()
    formErrorMessageIsDisplayed('msg_empty_lastname') 
    checkOut.inputLastName('Lastname')
    checkOut.clickbtnContinue()
    formErrorMessageIsDisplayed('msg_empty_postal') 
    checkOut.inputPostalCode('1234')
    checkOut.clickbtnContinue()
    validateURL('step_two_checkout')
  })

  it('Continue Checkout, Validate Overview Page, and Complete the Checkout Process', () => { 
    productsList.clickAddToCart()
    productsList.clickCartIcon()
    cartPage.verifyCartTitleIsDisplayed()
    cartPage.verifyProductListIsDisplayed()  
    cartPage.clickCheckout() 
    checkOut.verifyCheckoutPageTitle()
    checkOut.verifyContinuebtnIsvisble()
    checkOut.verifyCancelbtnIsvisble()
    //checkOut.clickbtnContinue()
    checkOut.inputFirstName('Firstname')
    checkOut.inputLastName('Lastname')
    checkOut.inputPostalCode('1234')
    checkOut.clickbtnContinue()
    validateURL('step_two_checkout')
    overview.verifyOverviewPageTitle()
    overview.verifyPaymentInfo
    overview.verifyShippingInfo
    checkOut.verifyCancelbtnIsvisble()
    overview.clickFinish()
    //Validate complete order page
    completeOrder.verifyUrl()
    completeOrder.verifyPageTitle()
    completeOrder.verifyBackHomeButton()
    completeOrder.verifyCompleteOrderPageTitle()
    completeOrder.clickBackHomeButton()
    validateURL('iventory')
  })
})
})