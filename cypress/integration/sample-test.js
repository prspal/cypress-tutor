/// <reference types="cypress" />
import Groups from './pages/groups'

describe('First Run', () => {
  beforeEach('Before each test ', () => {
    cy.apiLogin();
  })

  it('Open Groups', () =>{
    const group = new Groups();
    group.visit();
  })

})