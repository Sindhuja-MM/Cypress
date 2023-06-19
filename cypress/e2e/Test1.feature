Feature: Validating Cypress webpage

Scenario: Testcase to launch the cypress page and navigate to docs section
Given I launch the cypress URL
When I click on documentation button
Then I should be on the Why Cypress page
And I click on Getting started option in the left pane
When I click on Installing Cypress button
Then I should be on the Installing Cypress page