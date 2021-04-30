/// <reference types="cypress" />

describe('First exempele', ()=> {
    
    it('Test case 1',() => {
        //visit home page:
        cy.visit('http://localhost:3000/login')
        //Den hämtar site title:
        cy.title().should('eq','Testers Hotel')
        cy.contains('Login')
        cy.log('Asserted that the login string/label exists on this specific page')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.get('.blocks > :nth-child(1) > div').should('contain','Number:')
        cy.get('.user > .btn').click()
        cy.contains('Login')
        cy.get('.btn')
        
        

    })
})

