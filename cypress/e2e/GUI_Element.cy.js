describe('coustom comands', () => {

    it.skip("Handling Links", function () {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#name').type("Martin")

        cy.get('#country').select('France')
        cy.get('#post-body-1307673142697428135 > :nth-child(13)').get('[value="cheetah"]').click()

        // Open calendar
        // cy.get('#datepicker').type('02/12/2000',{enter}).

        cy.get('#datepicker')
            .clear()
            .type('02/12/2000{enter}')



    })

    it.skip('Cheak number od Rows and colums', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')

        // cy.get("table[name='BookTable'] tbody tr")
        //     .its('length')
        //     .then((rowCount) => {
        //         cy.log('Number of Rows: ' + rowCount)
        //     })

        cy.get('[name="BookTable"] > tbody > :nth-child(3) > :nth-child(2)').should('contain', 'Mukesh')

    })

    it.skip('Read all the rows and colums data in the first page', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get("#taskTable tbody tr")
            .its('length')
            .then((rowCount) => {

                cy.get("#taskTable thead th")
                    .its('length')
                    .then((colCount) => {

                        for (let i = 1; i <= rowCount; i++) {

                            cy.get(`#rows > :nth-child(${i}) > :nth-child(1)`)
                                .then((cell) => {

                                    if (cell.text().trim() === "Chrome") {

                                        console.log("Match found at row: " + i)

                                        // Print all column data of matched row
                                        for (let j = 1; j <= colCount; j++) {

                                            cy.get(`#rows > :nth-child(${i}) > :nth-child(${j})`)
                                                .then((data) => {
                                                    console.log(`Column ${j}: ` + data.text())
                                                })

                                        }

                                    }

                                })
                        }
                    })
            }
            )
    })




    it.skip('Mouse Hover', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')

        // Hover over dropdown button
        cy.get('.dropbtn').trigger('mouseover')
        cy.get("div[id='HTML3'] a:nth-child(1)").click()

    })

    it.skip('Js Alert', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#alertBtn').click()


        cy.on('window:alert', (text) => {
            expect(text).to.contains('I am an alert box!')
        })
        cy.get("#demo")
            .should('be.visible')
            .and('contain.text', 'You pressed OK!')
        cy.get('#demo').should('have.text', 'You pressed OK!')
        cy.get('#demo').should('contain.text', 'You pressed OK!')
    })
    it.skip('Conformation Alert', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Harry Potter');
        })
        cy.get('#promptBtn').click()

        cy.get('#demo').should('have.text', 'Hello Harry Potter! How are you today?')
    })


    it.skip('New tab', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen')
        })


        cy.get('#HTML4 > .widget-content > button')
            //  .invoke('removeAttr', 'target') 
            .click()

        cy.get('@windowOpen').should('be.calledWith', 'https://www.pavantestingtools.com/')

    })

    it.skip('Check popup window opens after button click', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')

        // Stub window.open before clicking
        cy.window().then((win) => {
            cy.stub(win, 'open').as('popup')
        })

        // Click button that opens popup
        cy.get('#PopUp').click()

        // Verify popup was triggered
        cy.get('@popup')
            .should('exist')
            //.should('have.been.calledOnce')
            .and('have.been.calledWith', 'https://www.selenium.dev/')

    })

    it.skip('Double Click', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("button[ondblclick='myFunction1()']").dblclick()


    })

    it.skip('Drag nd Drop    ', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get("div[id='draggable'] p")
            .trigger('mousedown', { which: 1 })

        cy.get("#droppable")
            .trigger('mousemove')
            .trigger('mouseup', { force: true })
    })

    it.skip('Pagination Web table ', () => {
        
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get("#productTable tbody tr")
            .its('length')
            .then((rowCount) => {

                cy.get("#productTable thead th")
                    .its('length')
                    .then((colCount) => {

                        for (let i = 1; i <= rowCount; i++) {

                            cy.get(`#rows > :nth-child(${i}) > :nth-child(1)`)
                                .then((cell) => {

                                    if (cell.text().trim() === "Router") {

                                        console.log("Match found at row: " + i)

                                        // Print all column data of matched row
                                        for (let j = 1; j <= colCount; j++) {

                                            cy.get(`#rows > :nth-child(${i}) > :nth-child(${j})`)
                                                .then((data) => {
                                                    console.log(`Column ${j}: ` + data.text())
                                                })

                                        }

                                    }

                                })
                        }
                    })
            }
            )
    })

    it.skip('Pagination Web table - Scan all pages', () => {

  cy.visit('https://testautomationpractice.blogspot.com/')

  // Get total pages
  cy.get('#pagination a')
    .its('length')
    .then((pageCount) => {

      function scanPage(pageNumber) {

        if (pageNumber > pageCount) {
          cy.log('Finished scanning all pages')
          return
        }

        // Click page
        cy.get('#pagination a')
          .contains(pageNumber)
          .click()

        cy.wait(500) // small wait for table refresh

        // Get row count
        cy.get('#productTable tbody tr')
          .its('length')
          .then((rowCount) => {

            for (let i = 1; i <= rowCount; i++) {

              cy.get(`#productTable tbody tr:nth-child(${i}) td:nth-child(1)`)
                .then(($cell) => {

                  if ($cell.text().trim() === 'Router') {

                    cy.log(`Router found on Page ${pageNumber}, Row ${i}`)

                    // Print entire row data
                    cy.get(`#productTable tbody tr:nth-child(${i}) td`)
                      .each(($col, index) => {
                        cy.log(`Column ${index + 1}: ${$col.text()}`)
                      })
                  }

                })

            }

            // After scanning this page → move to next
            scanPage(pageNumber + 1)

          })

      }

      scanPage(1)

    })

})

it('Pagination Web table - stable version', () => {

  cy.visit('https://testautomationpractice.blogspot.com/')

  cy.get('#pagination a')
    .its('length')
    .then((pageCount) => {

      function scanPage(pageNumber) {

        if (pageNumber > pageCount) {
          cy.log('Finished scanning all pages')
          return
        }

        cy.get('#pagination a')
          .contains(pageNumber)
          .click()

        cy.get('#productTable tbody tr')
          .each(($row, index) => {

            cy.wrap($row)
              .find('td')
              .first()  
              .then(($cell) => {

                if ($cell.text().trim() === 'Router') {

                  cy.log(`Router found on Page ${pageNumber}, Row ${index + 1}`)

                  cy.wrap($row)
                    .find('td')
                    .each(($col, colIndex) => {
                      cy.log(`Column ${colIndex + 1}: ${$col.text()}`)
                    })
                }

              })

          })
          .then(() => {
            // ✅ Move to next page only after rows finished
            scanPage(pageNumber + 1)
          })

      }

      scanPage(1)

    })

})
})




