describe("Api testing ", () => {

    it("Query params", () => {

        const token = "QpwL5tke4Pnpja7X4"   // your bearer token


        cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users',
                qs: {   page: 2 },
                headers: {
                Authorization: `Bearer ${token}`
                }
        })


        .then((response) => {

            expect(response.status).to.eq(200);
            expect(response.status).equal(200);
            expect(response.body.page).to.eq(2);
            expect(response.body.data).to.have.length(6);

            const user = response.body.data[0];
            expect(user).to.have.property('id', 7)
            expect(user).to.have.property('email', 'michael.lawson@reqres.in')
            expect(user).to.have.property('first_name', 'Michael')
            expect(user).to.have.property('last_name', 'Lawson')
            expect(user).to.have.property('avatar')

            

        })
})

})