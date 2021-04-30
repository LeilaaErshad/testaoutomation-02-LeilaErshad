/// <reference types="cypress" />

const NAME_FIELD = ":nth-child(1) > input"
const MAIL_FIELD = ":nth-child(2) > input"
const PHONE_FIELD = ":nth-child(3) > input"

const SAVE_BTM = ".blue"

function createClient(name, mail, phone, content) {
    cy.get(NAME_FIELD).type(name)
    cy.get(MAIL_FIELD).type(mail)
    cy.get(PHONE_FIELD).type(phone)
    cy.get(SAVE_BTM).click()
    cy.contains(content)

}

exports.default ={
    createClient
}

