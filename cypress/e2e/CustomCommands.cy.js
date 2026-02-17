describe('coustom comands', () => {

    it("Handling Links",function() {
        cy.visit('https://the-internet.herokuapp.com')

        //cy.get(':nth-child(1) > a').click()   

        cy.clickLink("Add/Remove Elements")         // Using custom command to click on link
        cy.get('h3').should('contain', 'A/B Test')    
        
        })

})

