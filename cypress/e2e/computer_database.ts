import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I visit Computer database page', () => {
  cy.visit('https://computer-database.gatling.io/computers')
})

Then('I will see the home page has loaded', () => {
  cy.get('#main > h1')
    .should('have.text', '574 computers found')
})

When('I input {string} in textfield', (computerName: string) => {
  cy.get('#searchbox')
    .type(computerName)
})

When('I click Filter by name button', () => {
  cy.get('#searchsubmit')
    .click()
})

Then('I will see {string} in the list', (searchResult: string) => {
  cy.get('tbody > tr > :nth-child(1)')
    .should('have.text', searchResult)
})

When('I click computer name', () => {
  cy.get('tbody > tr > td:nth-child(1) > a')
    .click()
})

Then('I will see edit data page', () => {
  cy.get('#main > h1')
    .should('have.text', 'Edit computer')
})

When('I input {string} in textfield Computer name', (computerName: string) => {
  cy.get('#name')
    .clear()
    .type(computerName)
})

When('I input {string} in textfield Introduced', (introduced: string) => {
  cy.get('#introduced')
    .type(introduced)
})

When('I input {string} in textfield Discontinued', (discontinued: string) => {
  cy.get('#discontinued')
    .type(discontinued)
})

When('I choose {string} in company dropdown', (company: string) => {
  cy.get('#company')
    .select(company)
})

When('I click Save this computer button', () => {
  cy.get('.primary')
    .click()
})

Then('I will see message {string}', (message: string) => {
  cy.get('div.alert-message.warning')
    .should('have.text', message)
})

When('I click first data in the list', () => {
  cy.get('tbody > :nth-child(1) > :nth-child(1) > a')
    .click()
})

When('I click Delete this computer button', () => {
  cy.get('.topRight > .btn')
    .click({ force: true })
})

When('I click Add a new computer button', () => {
  cy.get('#add')
    .click()
})

Then('I will see create data page', () => {
  cy.get('#main > h1')
    .should('have.text', 'Add a computer')
})

When('I click Create this computer button', () => {
  cy.get('.primary')
    .click()
})

When('I input empty value in textfield Computer name', () => {
  cy.get('#name')
    .clear()
})

When('I input invalid value {string} in textfield Introduced', (introduced: string) => {
  cy.get('#introduced')
    .clear()
    .type(introduced)
})

When('I input invalid value {string} in textfield Discontinued', (discontinued: string) => {
  cy.get('#discontinued')
    .clear()
    .type(discontinued)
})

Then('I will see message error message {string}', (errorMessage: string) => {
  cy.get('div.clearfix.error > div > span')
    .should('have.text', errorMessage)
})