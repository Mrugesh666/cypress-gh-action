describe("Parsing Json Response", () => {

    it("Parsing Json Response", () => {

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'x-api-key': 'reqres_72849ecd0c2a413bb72acd75c46a10da',
                'Authorization': 'Bearer QpwL5tke4Pnpja7X4'
            }
        }).then((response) => {

            expect(response.status).to.eq(200)

            // Access correct data array
            expect(response.body.data[0].id).to.eq(7)
            expect(response.body.data[0].email).to.eq("michael.lawson@reqres.in")
            expect(response.body.data[0].first_name).to.eq("Michael")
            expect(response.body.data[0].last_name).to.eq("Lawson")

            
            expect(response.body.data[1].id).to.eq(8)
            expect(response.body.data[1].email).to.eq("lindsay.ferguson@reqres.in")
            expect(response.body.data[1].first_name).to.eq("Lindsay")
            expect(response.body.data[1].last_name).to.eq("Ferguson")

        })

    })
})
