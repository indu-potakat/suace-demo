class MenuPage {    
    clickOpenMenu () {
        cy.get('button[id=react-burger-menu-btn]').click()      
    }

    clickCloseMenu () {
        cy.get('button[id=react-burger-cross-btn]' ).click()      
    }

    clickAllItemsMenu () {
        cy.get('a[data-test=inventory-sidebar-link]').click()      
    }

    clickAboutMenu () {
        cy.get('a[data-test=about-sidebar-link]' ).click()      
    }

    clickLogoutMenu () {
        cy.get('a[data-test=logout-sidebar-link]').click()      
    }

    clickResetAppState () {
        cy.get('a[data-test=reset-sidebar-link]'  ).click()      
    } 

}
export default new MenuPage()