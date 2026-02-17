import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('Launch OrangeHRM application URL',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

Then('Enter the valid username {string}', (username) => {
    cy.get('[name="username"]').type(username)
})

Then('Enter the valid password {string}', (password) => {
    cy.get('[name="password"]').type(password)
})

Then('Click on Login button',()=>{
    cy.get('[type="submit"]').click()
})

Then('Verify Login is successful',()=>{
    cy.get('h6').should('have.text','Dashboard')
})
