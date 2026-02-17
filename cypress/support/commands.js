// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

require('cypress-downloadfile/lib/downloadFileCommand')



// Custom command to click a link by text (case-insensitive)
Cypress.Commands.add('clickLink', (linkText) => {
  // Use regex for case-insensitive search
  cy.get('a').filter((index, el) => {
    return Cypress.$(el).text().toLowerCase() === linkText.toLowerCase()
  }).click()
})
 


// Custom command for case-insensitive contains query

Cypress.Commands.overwriteQuery( 'contains',(originalFn, subject, filter, text, options = {}) => {

    if (typeof text === 'object') {
      options = text
      text = filter
      filter = undefined
    }
    options.matchCase = false
    return originalFn(subject, filter, text, options)
  }
)

