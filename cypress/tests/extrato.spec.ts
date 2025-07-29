import { contains } from "cypress/types/jquery"

describe('Real World APP', () => {
  it('Extrato de transações', () => {
    cy.visit('http://localhost:3000/signin')
      cy.get("[name='username']").type('Ben')
      cy.get("[name='password']").type('s3cret')
      cy.get('[data-test="signin-submit"]').click()
      cy.get('[data-test="nav-public-tab"]')
      cy.get('[data-test="nav-personal-tab"]').click()




})
})