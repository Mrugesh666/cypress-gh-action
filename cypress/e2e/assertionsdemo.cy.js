it('Assertions Demo', () => {


    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn').should('contain', 'Button')   
                        .and('have.class', 'query-btn')
                        .and('be.visible')
                        .and('not.be.disabled')

    expect(true).to.be.true
    assert.equal(4,4, 'Not Equal')
    assert.strictEqual(4,3, 'Not Strict Equal')
})