/// <reference types="cypress"/>

it('google search', () => {

    cy.visit('https://currencystrengthmeter.org/')
    cy.get('.el-butfton').click()
     //cy.contains('Hello, World').click
})