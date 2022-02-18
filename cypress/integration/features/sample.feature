Feature: Sample Gherkin Test
  I want to Test Gherkin with Cypress.io

  Scenario: Opening a group page
    Given User is logged in
    When 'group' page is open
    Then Verify the URL