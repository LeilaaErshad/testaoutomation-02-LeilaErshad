/// <reference types="cypress" />
import * as loginPage from "../pages/login-page"
import * as indexPage from "../pages/index-page"
import * as clientsPage from "../pages/clients_page"
import * as clientNewPage from "../pages/client-new-page"


var faker = require('faker');

let randomName = faker.name.findName();
let randomMail = faker.internet.email();
let randomPhone = faker.phone.phoneNumber();



describe("Testsuite", () => {
    beforeEach(()=> {
        cy.visit("/")
        loginPage.confirmHeader("Login")
        loginPage.loginUser("tester01", "GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Tester Hotel Overview")
        cy.log('At login page!')
        cy.percySnapshot('index-page')
    });

it("Login and logout", () => {
    //    loginPage.loginUser("tester01", "GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Tester Hotel Overview")
    cy.log('at dashboard page!')
    cy.log('logout!')
        cy.percySnapshot('logout')
    });

    it("Creat client and verify", () => {
        indexPage.viewClients("Clients") 
        cy.log('Client page!')
        cy.percySnapshot('Before client')
        clientsPage.viewClientNew("New Client")
        clientNewPage.createClient(randomName, randomMail, randomPhone, "Clients")
        clientsPage.verifyLastClient(randomName, randomMail, randomPhone)
        cy.log('Client page!')
        cy.percySnapshot('After-Client')
        clientsPage.deleteLastClient()
        indexPage.logoutUser("Login")

    });
});
