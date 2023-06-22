import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import Test1Page from '../pages/Test1.page';

const test1Page = new Test1Page();

Given("I launch the cypress URL", () => {
test1Page.launchURL();
})

When("I click on documentation button", () => {
test1Page.selectDocumentationButton();
})

Then("I should be on the Why Cypress page", ()=> {
 test1Page.validateCypressPage();
})

And("I click on Getting started option in the left pane", () => {
test1Page.selectGetStartedButton();
})

When("I click on Installing Cypress button", () => {
test1Page.selectInstallCypressButton();
})

Then("I should be on the Installing Cypress page", () => {
test1Page.validateInstallCypressPage();
})