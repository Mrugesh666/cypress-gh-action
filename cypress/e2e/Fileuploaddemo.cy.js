/// <reference types="cypress"/>
/// <reference types="cypress-downloadfile"/>

it('File upload demo', function() {

    cy.visit('https://the-internet.herokuapp.com')
   cy.get('[name="file"]').attachFile('sample.txt')
    cy.get('#file-submit').click()
    
})



it('File download demo', function() {

// cy.visit('https://en.wikipedia.org/wiki/Nissan_President#/media/File:2009_NISSAN_PRESIDENT.jpg')
// cy.get('[href="download/test-file.jpg"]').click()
cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
    
    
})