describe('Capture Screenshot and Video', () => {

    it("Capture Screenshot",function() {

        cy.visit('https://the-internet.herokuapp.com')
        cy.screenshot("Homepage")// Capture screenshot of the entire page

        cy.get('.heading').screenshot("heading")  // Capture screenshot of specific element


        //Automatically capture screenshot & visual video recording on test failure
        cy.get(':nth-child(1) > a').click()
        cy.get('h3').should('contain', 'A/B Test')
        cy.get(':nth-child(1) > a').click()  // This will cause test failure and trigger screenshot and video recording
        

    })

})