const Ajv=require('ajv')
const ajv=new Ajv()

describe('API Testing - JSON Schema Validation', () => {

    it('Validate JSON Schema', () => {
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
                // Check if response has expected structure
                expect(response.body).to.exist;
                expect(response.body.data).to.be.an('array').and.not.be.empty;
                
                const schema = {
                    "$schema": "http://json-schema.org/draft-07/schema#",
                    "title": "Generated schema for Root",
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "number"
                        },
                        "email": {
                            "type": "string"
                        },
                        "first_name": {
                            "type": "string"
                        },
                        "last_name": {
                            "type": "string"
                        },
                        "avatar": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "id",
                        "email",
                        "first_name",
                        "last_name",
                        "avatar"
                    ]
                };
            const validate = ajv.compile(schema);
            const valid = validate(response.body.data[0]);
            expect(valid).to.be.true;
        });
    });
});