import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I visit JavaScript Alerts page', () => {
  cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
})

Then('I will see the home page has loaded', () => {
  cy.get('h3')
    .should('have.text', 'JavaScript Alerts')
})

When('I click JS Alert', () => {
  cy.get('li:nth-child(1) > button')
    .click()
})

When('I click JS Confirm', () => {
  cy.get('li:nth-child(2) > button')
    .click()
})

When('I click JS Prompt', () => {
  cy.get('li:nth-child(3) > button')
    .click()
})

Then('I will see popup JS Alert {string}', (title: string) => {
  cy.on('window:alert', (text) => {
    expect(text).to.equal(title)
  })
})

Then('I will see popup JS Confirm {string}', (title: string) => {
  cy.on('window:confirm', (text) => {
    expect(text).to.equal(title)
  })
})

Then('I will see popup JS Prompt {string}', (title: string) => {
  cy.on('window:prompt', (text) => {
    expect(text).to.equal(title)
  })
})

When('I click cancel in the popup JS confirm', () => {
  cy.on("window:confirm", (s) => {
    return false;
  });
  cy.get(':nth-child(2) > button')
    .click()
})

Then('I will see result {string}', (result: string) => {
  cy.get('#result')
    .should('have.text', result)
})

When('I click JS Prompt and input in popup', () => {
  cy.window().then(function (p) {
    cy.stub(p, "prompt").returns("xtramile");
    cy.get(':nth-child(3) > button').click()
  });
})