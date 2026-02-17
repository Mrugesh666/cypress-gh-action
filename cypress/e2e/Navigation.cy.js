


describe('Navigation', () => {

    it("Handling Links",function() {
        cy.visit('https://the-internet.herokuapp.com')
        cy.title().should('eq', 'The Internet')

        //cy.clickLink("Add/Remove Elements")         // Using custom command to click on link
        cy.get('ul > :nth-child(2) > a').click()   
        cy.get('h3').should('have.text', 'Add/Remove Elements')

        cy.go('back')
        cy.get('.heading').should('have.text', 'Welcome to the-internet')

        cy.go('forward')
        cy.get('h3').should('have.text', 'Add/Remove Elements')

        cy.go(-1)
        cy.get('.heading').should('have.text', 'Welcome to the-internet') 

        cy.go(1)
        cy.get('h3').should('have.text', 'Add/Remove Elements')


    })


})