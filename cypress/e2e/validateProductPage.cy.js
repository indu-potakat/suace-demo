// This test spec validated Product/Inventory page on 'https://www.saucedemo.com/'
import {ProductsList} from "../support/pages/productListpage.js" 
const productsList = new ProductsList() 
const supportedViewports = ['desktop', 'mobile']

supportedViewports.forEach((viewport) => {
describe(`Validate Products Suite - ${viewport}`, () => {

  beforeEach(() => {
    cy.visit('/')
    cy.setViewportFor(viewport) 
    cy.url().should('include', 'saucedemo')  
    cy.c_login({ username: 'successlogin', password: 'password' })
    cy.clickLoginButton ()  
  })

  // Verify that the user can add a product to the cart and remove it from the inventory page successfully.
  it('Validate Add to Cart and Remove Product Functionality on Inventory Page', () => {
    productsList.verfiyAddToCart()  
    productsList.clickAddToCart()
    productsList.verifyCartBadge('1') 
    productsList.verifyRemoveButton()  
    productsList.clickRemove()  
  })  

// Ensure the cart badge accurately reflects the number of items when multiple products are added to or removed from the cart on the inventory page
  it('Validate Cart Badge Updates on Add/Remove of Multiple Items from Inventory Page', () => {
    productsList.verfiyAddToCart()  
    productsList.verifyAddToCartNextItem ()
    productsList.clickAddToCart()
    productsList.verifyCartBadge('1') 
    productsList.clickAddToCartNextItem() 
    productsList.verifyCartBadge('2')  
    productsList.clickRemove()  
    productsList.verifyCartBadge('1') 
  })  
  afterEach(() => {
    cy.clearCookies()  
  })
  
}) 
}) 