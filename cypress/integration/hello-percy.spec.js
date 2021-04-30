/// <reference types="cypress" />

describe('First exempele', ()=> {
    
    it('Test case 1',() => {
        //visit home page:
        cy.visit('http://localhost:3000/login')
        //Den hämtar site title:
        cy.title().should('eq','Testers Hotel')
        cy.contains('Login')
        //-->> we are at index (login) page!!

        cy.log('At login page!')
        cy.percySnapshot('index-page')


        cy.get(':nth-child(1) > input').type('tester02')
        cy.get(':nth-child(2) > input').type('sppm7qncqmVft5uECkwjLcLdEJGzM3Cw')
        cy.get('.btn').click()
        cy.contains('Welcome')
        cy.wait(3000)
        //-->> we are at dashboard page!!
        cy.log('At dashboard page!')
        cy.percySnapshot('dashboard-page') 

    })
})

