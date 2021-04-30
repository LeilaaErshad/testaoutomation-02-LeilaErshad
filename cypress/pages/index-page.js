/// <reference types="cypress" />


// Element
const LOGOUT_BTN = ".user > .btn"
const VIEW_CLIENTS_BTN =".blocks > :nth-child(2) > .btn"

//function/ actions
function logoutUser(content) {
    cy.get(LOGOUT_BTN).click()
    cy.contains(content)
}
function viewClients(content) {
    cy.get(VIEW_CLIENTS_BTN).click();
    cy.contains(content)
}

//exports

exports.default = {
    logoutUser,
    viewClients
}


