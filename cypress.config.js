const { defineConfig } = require("cypress")   
const dotenv = require('dotenv')
dotenv.config()

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for html report
  e2e: {
    setupNodeEvents(on, config) {
       screenshotOnRunFailure=true
    require('cypress-mochawesome-reporter/plugin' ) (on)
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com/',
  },
  env: {
    credentials: {
      test: {
        successlogin: {
          ID: process.env.SUCCESS_LOGIN,
        },
        lockedoutuser: {
          ID: process.env.LOCKEDOUT_USER,
        },
      },
    },
    password: process.env.PASSWORD,
    messages: {
      msg_locked_out: "Epic sadface: Sorry, this user has been locked out.",
      msg_empty_username: "Epic sadface: Username is required",
      msg_empty_password: "Epic sadface: Password is required",
      msg_empty_firstname:"Error: First Name is required",
      msg_empty_lastname:"Error: Last Name is required",
      msg_empty_postal:"Error: Postal Code is required",
    },
    redirectUrls:{
      iventory: "https://www.saucedemo.com/inventory.html",
      cart: "https://www.saucedemo.com/cart.html",
      step_one_checkout: "https://www.saucedemo.com/checkout-step-one.html",
      checkout_complete : "https://www.saucedemo.com/checkout-complete.html",
      step_two_checkout: "https://www.saucedemo.com/checkout-step-two.html",
    },
  reporterOptions: {
    reportDir: 'cypress/results',
    charts: true,
    reportPageTitle: 'My Cypress Report',
    embeddedScreenshots: true,
    inlineAssets: true,
  }
  },
});
