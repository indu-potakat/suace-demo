# Web Automation Testing using Cypress on Saucedemo
This repository is the result of a project practice aimed at learning and applying Web Automation testing using Cypress. The main focus of this project is to validate the core functionalities of Saucedemo. The web automation Saucedemo covering the functional test of auth, cart, and products. This source of project is [Saucedemo](https://www.saucedemo.com/) web demo application. 

## Test Cases
This link to access [Test Cases](https://docs.google.com/spreadsheets/d/15m83Lqhm3-xFlIUMO9RbIF0bZp8yOc2w1xtsSt7SCcw/).
This test suite have 4 test cases :
1. FailedTest – This test case is intentionally designed to fail for demonstrating failed case reporting. It is currently skipped. To execute it, remove .skip and update the test logic as needed.
2. Login Test - This test caes validate the login functionality. Coveres both happy and negative flow.
3. Main Checkout and Complete - This is the main test case to check out 3 otems and comeplte order. 
4. Validate Product Page - This test case validates Product page.

## Getting Started

### Prerequisites

Ensure that you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (Node package manager)

## .env
Create a .env file within the sauce demo folder and save the following environment variables based on the requirement<br>
SUCCESS_LOGIN=<br>
PASSWORD=<br>
LOCKEDOUT_USER=<br>

## Test Reporting  
This framework uses cypress-mochawesome-reporter to generate test reports automatically. After test execution,<br>
the report will be saved at: cypress/reports/html/index.html

### Below is the screenshot of the test report after executing cypress tests 
![Report1](cypress/screenshots/supportingimages/Image1.jpg)
![Report2](cypress/screenshots/supportingimages/Image2.jpg)
![Report3](cypress/screenshots/supportingimages/Image3.jpg)


### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/hbibakbr/web-saucedemo-cypress.git
   cd repo
   ```
2. Install cypress
    ```bash
    npm install cypress --save-dev
    ```
5. Install Mochawesome
    ```bash
    npm install mochawesome mocha --save-dev
    ```
6. Install dotenv
    ```bash
    npm install dotenv --save-dev
    ```

7. Running The Suites Test
    ```bash
    npx cypress open
    ```