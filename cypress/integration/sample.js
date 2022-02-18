/// <reference types="cypress" />
describe('First Run', () => {
  it('Test one', () => {
    cy.apiLogin();
    cy.visit('/');
  })

})