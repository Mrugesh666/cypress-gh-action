import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Launch URL',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})

Then('Verify the page tittle',()=>{
    cy.title().should('eq','OrangeHRM')
    
})

