import {
    Given,
    When,
    Then
} from "cypress-cucumber-preprocessor/steps";
import Groups from '../pages/groups';

Given('User is logged in', () => {
    cy.apiLogin()
})

When(`{string} page is open`, (page) => {
    cy.log(`this page: ${page}`)
    const group = new Groups();
    group.visit();
})

Then('Verify the URL', () => {

})