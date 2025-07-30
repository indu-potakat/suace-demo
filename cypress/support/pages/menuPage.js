class MenuPage {
  clickOpenMenu() {
    cy.get("button[id=react-burger-menu-btn]").click() 
  }
  clickLogoutMenu() {
    cy.get("a[data-test=logout-sidebar-link]").click() 
  }
}
export default new MenuPage() 
