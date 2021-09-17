/* eslint-disable no-undef */
Cypress.Commands.add("loginViaUI", (username, password) => {
    cy.visit("/")
    cy.get("input#username").type(username)
    cy.get("input#password").type(password)
    cy.get("button#submit").click()
})

Cypress.Commands.add("loginViaAPI", (uname, pwd) => {
    cy.request({
        method: "POST",
        url: Cypress.env("apiserver") + "/login",
        body: {
            username: uname,
            password: pwd
        }
    }).then(res => {
        window.localStorage.setItem("token", JSON.stringify(res.body))
    })
})

Cypress.Commands.add("loginViaUISession", (username, password) => {
    cy.session([username, password], () => {
        cy.visit("/")
        cy.get("input#username").type(username)
        cy.get("input#password").type(password)
        cy.get("button#submit").click()
    },
        {
            validate() {
                cy.url().should("contain", "/home")
            }
        }
    )
})

Cypress.Commands.add("loginViaAPISession", (uname, pwd) => {
    cy.session([], () => {
        cy.request({
            method: "POST",
            url: Cypress.env("apiserver") + "/login",
            body: {
                username: uname,
                password: pwd
            }
        }).then(res => {
            window.localStorage.setItem("token", JSON.stringify(res.body))
        })
    },
        {
            validate() {
                cy.request('/greet').its('status').should('eq', 200)
            }
        }
    )

})