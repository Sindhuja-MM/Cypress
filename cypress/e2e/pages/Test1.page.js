import Test1Screen from "../screens/Test1.screen";

const test1Screen = new Test1Screen();

export default class Test1Page {

launchURL()
{
   cy.visit(test1Screen.URL);
}

selectDocumentationButton()
{
    cy.get(test1Screen.documentationButton).click();
}

validateCypressPage()
{
    cy.get(test1Screen.cypressHomePage).should("have.text", "Why Cypress?")
}

selectGetStartedButton()
{
    cy.contains(test1Screen.getStartedButton).click();
}

selectInstallCypressButton()
{
    cy.get(test1Screen.installCypressButton).click();
}

validateInstallCypressPage()
{
    cy.get(test1Screen.installCypressHomePage).should("have.text", "Installing Cypress");
}
}