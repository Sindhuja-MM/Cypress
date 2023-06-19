import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

Given("I launch the cypress URL", () => {
cy.visit("https://www.cypress.io/");
})

When("I click on documentation button", () => {
  cy.get(".flex-wrap .text-indigo-500").click();
})

Then("I should be on the Why Cypress page", ()=> {
  cy.get("h1").should("have.text", "Why Cypress?")
})

And("I click on Getting started option in the left pane", () => {
  cy.contains("Getting Started").click();
})

When("I click on Installing Cypress button", () => {
  cy.get(':nth-child(2) > .menu__list > :nth-child(1) > .menu__link').click();
})

Then("I should be on the Installing Cypress page", () => {
  cy.get("h1").should("have.text", "Installing Cypress");
})