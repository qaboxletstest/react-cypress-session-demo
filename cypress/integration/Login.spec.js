/* eslint-disable no-undef */
describe('Login Suite', () => {

    beforeEach(() => {
        //
    })

    it.only('Login via UI', () => {
        cy.visit("/")
        cy.get("input#username").type(Cypress.env("username"))
        cy.get("input#password").type(Cypress.env("password"))
        cy.get("button#submit").click()
        cy.url().should("contain", "/home")
        cy.get("#logout").should("be.enabled")
    });

    it.only('Login via Custom LOGIN-UI Command', () => {
        // cy.loginViaUI(Cypress.env("username"), Cypress.env("password"))
        cy.loginViaUISession(Cypress.env("username"), Cypress.env("password"))
        cy.visit("/")
        cy.url().should("contain", "/home")
        cy.get("#logout").should("be.enabled")
    });

    it.only('Login via Custom LOGIN-API Command - Greet', () => {
        // cy.loginViaAPI(Cypress.env("username"), Cypress.env("password"))
        cy.loginViaAPISession(Cypress.env("username"), Cypress.env("password"))
        cy.visit("/greet")
        cy.get("h2.title").should("have.text", "Welcome To QA BOX LET'S TEST")
    });
});