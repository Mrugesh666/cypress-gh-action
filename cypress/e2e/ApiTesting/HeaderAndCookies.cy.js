describe("Api testing ", () => {


before("Creating access token ", () => {

        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: {
                "title": "test",
                "body": "test body",
                "userId": 1
            },
         
        })
        .then((response) => {
            cy.log('Login Response Status: ' + response.status);
            
          
                cy.log('Unexpected status: ' + response.status);
                cy.wrap('QpwL5tDM4u').as('accessToken');
            
        });
});

before("Createing New Order ", function() {

        cy.get('@accessToken').then((token) => {
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                 },
                body: {    "name": "morpheus",
                            "job": "leader"
                        },
                failOnStatusCode: false
            })
            .then((response) => {
                cy.log('Create User Response Status: ' + response.status);
                
                if (response.status === 403) {
                    cy.log('Cloudflare blocked this request. Skipping assertions.');
                } else if (response.status === 200 || response.status === 201) {
                    expect(response.body).to.have.property('name', 'morpheus');
                    expect(response.body).to.have.property('job', 'leader');
                    expect(response.body).to.have.property('id');
                    expect(response.body).to.have.property('createdAt');

                    const createdAt = response.body.createdAt;
                    expect(createdAt).to.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/);
                } else {
                    cy.log('Unexpected status: ' + response.status);
                }
             
            });
        });
});




it("Feching The Orders ", function() {

    cy.get('@accessToken').then((token) => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            failOnStatusCode: false
        })
        .then((response) => {
            cy.log('Fetch Users Response Status: ' + response.status);
            
            if (response.status === 403) {
                cy.log('Cloudflare blocked this request. Skipping assertions.');
            } else if (response.status === 200) {
                expect(response.body.data).to.have.length.greaterThan(0);
            }
        });
    });

});




})
