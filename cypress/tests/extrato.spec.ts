import { contains } from "cypress/types/jquery"
import ursData from "../fixtures/users-data.json"

describe('Real World APP', () => {
  it('Extrato de transações', () => {
    cy.visit('/signin')
      cy.get("[name='username']").type('Couto_Maia')
      cy.get("[name='password']").type('123456')
      cy.get('[data-test="signin-submit"]').click()
      cy.get('[data-test="nav-public-tab"]')
      cy.get('[data-test="nav-personal-tab"]').click()




})
})