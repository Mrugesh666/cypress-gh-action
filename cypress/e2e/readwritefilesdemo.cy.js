
before(function ()  {
    cy.fixture('example.json').as('data')
    })
    

it('Read files using fixture', function ()  {

    cy.fixture('example.json').then(function (data) {
    
        cy.log(data.name)
        cy.log(data.email)  
        cy.log(data.body) 
        
    })
    cy.log(this.data.name)
})


it('Read files using readFile', function ()  {

    cy.readFile('cypress/fixtures/example.json').then(function (data) {

        cy.log(data.name)})
})

it('Write files using writeFile', function ()  {

    cy.writeFile('cypress/fixtures/example.json', { name: 'Justin' }).then(function () {

        cy.readFile('cypress/fixtures/example.json').then(function (data) { 
            cy.log(data.name)
        })
    }) 
}   )   

it('Write files using writeFile', function ()  {

    cy.writeFile('cypress/fixtures/sample.txt','This is a sample text file')

})