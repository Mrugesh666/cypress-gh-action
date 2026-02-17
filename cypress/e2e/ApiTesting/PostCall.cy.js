const { title } = require("process")

describe('api testing', () => { 
    
    it("Approch 1 - Hard code json object", () => {

        const requestBody = {
            "title": "foo",
            "body": "bar",
            "userId": 1
        }

        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: requestBody
        })
            .its('status')
            .should('equal', 201)
    })   

    
    it("Approach 2 - Dynamic code json object", () => {

        const requestBody = {
            title: `word_${Math.random().toString(36).substring(2,7)}`,
            body: `body_${Math.random().toString(36).substring(2,7)}`,    
            userId: 1
        }

        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: requestBody.body,
        })
            .its('status')
            .should('equal', 201)
            cy.log(requestBody.body) 
    })  


it("Approach 3 - Fixtures", () => {

    cy.fixture('PostCall').then((requestBody) => {

        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: requestBody   // send full fixture
        })
        .then((response) => {

    expect(response.status).to.eq(201)

    expect(response.body.title).to.eq(requestBody.title)
    expect(response.body.body).to.eq(requestBody.body)
    expect(response.body.userId).to.eq(requestBody.userId)

})


            cy.log(requestBody.title)
    })
})
})
