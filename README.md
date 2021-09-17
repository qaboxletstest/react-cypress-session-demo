# Getting Started with Cypress cy.session command

This project is created to show how we can login into an application programmatically; no more repetitions of login script. 

## Available Scripts

In the project directory, you can run:

### Start Express Server `npm run start-server`

Open [http://localhost:8080/login](http://localhost:8080/login) to view it in the browser.
```
username=adminS3rcet
password=adminS3rcet
```

### Start React UI App `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
```
username=adminS3rcet
password=adminS3rcet
```

### `npm test`

Launches the Cypress test runner in the interactive watch mode.
```
    it('Login via Custom LOGIN-UI Command', () => {
        // cy.loginViaUI(Cypress.env("username"), Cypress.env("password"))
        cy.loginViaUISession(Cypress.env("username"), Cypress.env("password"))
        cy.visit("/")
        cy.url().should("contain", "/home")
        cy.get("#logout").should("be.enabled")
    });

    it('Login via Custom LOGIN-API Command - Greet', () => {
        // cy.loginViaAPI(Cypress.env("username"), Cypress.env("password"))
        cy.loginViaAPISession(Cypress.env("username"), Cypress.env("password"))
        cy.visit("/greet")
        cy.get("h2.title").should("have.text", "Welcome To QA BOX LET'S TEST")
    });
```
