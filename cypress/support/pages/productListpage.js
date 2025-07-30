import { validateURL } from "../utils"

class ProductsList {
    clickBurgerMenu () {
        cy.get('button[id=react-burger-menu-btn]' ).click()   
    }

    clickAddToCart () {
        cy.get('button[id=add-to-cart-sauce-labs-backpack]').click()   
    }
    clickAddToCartNextItem () {
        cy.get('button[id=add-to-cart-sauce-labs-bike-light]').click()   
    }

    clickRemove () {
        cy.get('button[id=remove-sauce-labs-backpack]').click()   
    }

    clickProductItem () {
        cy.get('[data-test="shopping-cart-link"]').click()   
    }

    clickCartIcon () {
        cy.get('[data-test="shopping-cart-link"]').click()   
        validateURL('cart')  
    }

    verifyBurgerMenuIsDisplayed () {
        cy.get('button[id=react-burger-menu-btn]').should('be.visible')   
    }

    // verifyInventoryUrl () {
    //     cy.url().should('equal', this.inventoryPageUrl)   
    // }

    verifyInventoryTitle () {
        cy.get('span[class=title]' ).should('exist', 'Products')   
    }

    verfiyAddToCart () {
        cy.get('button[id=add-to-cart-sauce-labs-backpack]').should('exist', 'Add to cart')   
    }
    verifyAddToCartNextItem () {
        cy.get('button[id=add-to-cart-sauce-labs-bike-light]').should('exist', 'Add to cart')   
    }


    verifyRemoveButton () {
        cy.get('button[id=remove-sauce-labs-backpack]').should('exist')   
    }

    verifyCartBadge (total) {
        cy.get('a[data-test=shopping-cart-link]').should('have.text', total)   
    }

}
class CartPage {
    clickContinueShopping () {
        cy.get('button[id=continue-shopping]').click()    
    }

    clickCheckout () {
        cy.get('button[id=checkout]').click()  
        validateURL('step_one_checkout')
    }

    clickRemoveButton () {
        cy.get('button[id="remove-sauce-labs-backpack"]').click()    
    }

    verifyCartUrl () {
        cy.url().should('equal', 'https://www.saucedemo.com/cart.html')    
    }

    verifyCartTitleIsDisplayed () {
        cy.get('span[class=title]').should('have.text', 'Your Cart')    
    }

    verifyProductListIsDisplayed () {
        cy.get('div[data-test=inventory-item]').should('exist')    
    }

    verifyProductListIsNotDisplayed () {
        cy.get('div[data-test=inventory-item]').should('not.exist')    
    }
}
    class CheckOut {
    inputFirstName (firstname) {
        cy.get('input[id=first-name]').type(firstname)
    }

    inputLastName (lastname) {
        cy.get('input[id=last-name]').type(lastname)
    }

    inputPostalCode (postal) {
        cy.get('input[id=postal-code]').type(postal)
    }
    clickbtnContinue () {
        cy.get('input[id=continue]').click()    
    }

    clickCancel () {
        cy.get('button[id=cancel]').click()
    }
     verifyContinuebtnIsvisble () {
        cy.get('input[id=continue]').should('be.visible')   
    }
    verifyCancelbtnIsvisble () {
        cy.get('[data-test="cancel"]').should('be.visible')   
    }

    verifyFirstCheckoutUrl () {
        cy.url().should('equal', 'https://www.saucedemo.com/checkout-step-one.html')
    }

   verifyCheckoutPageTitle () {
        cy.get('span[class=title]').should('have.text', 'Checkout: Your Information')    
    }

    verifyProductListIsNotDisplayed () {
        cy.get('div[data-test=inventory-item]').should('not.exist')    
    }
}
    class Overview {
    verifyOverviewPageTitle () {
        cy.get('span[class=title]').should('have.text', 'Checkout: Overview')    
    }
    verifyPaymentInfo (){
    cy.get('[data-test="payment-info-label"]').should('be.visible')
   }
     verifyShippingInfo (){
    cy.get('[data-test="shipping-info-label"]').should('be.visible')
   }
    clickFinish () {
        cy.get('button[id=finish]').click()
        validateURL('checkout_complete')
    }
    
}
class CompleteOrder{
    verifyPageTitle () {
        cy.get('span[class=title]').should('have.text', 'Checkout: Complete!')    
    }
    verifyBackHomeButton () {
        cy.get('button[id=back-to-products]').should('exist')   
    }
    verifyCompleteOrderPageTitle () {
        cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')    
    }
    verifyUrl () {
        cy.url().should('equal', 'https://www.saucedemo.com/checkout-complete.html')    
    }
    clickBackHomeButton () {
        cy.get('button[id=back-to-products]').click()
    }
    verifyhomeURL(){
        cy.url().should('equal', 'https://www.saucedemo.com/inventory.html')
    }
}

export { ProductsList, CartPage , CheckOut, Overview, CompleteOrder }