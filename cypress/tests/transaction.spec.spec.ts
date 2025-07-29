describe('Real World APP', () => {
    it('Transaction - Sucess', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('maia20')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-public-tab"]')

    cy.get(".MuiButton-contained").click()
    cy.get(".MuiFormControl-marginDense").click().type('Dina20')
    cy.get('.css-konndc-MuiListItemText-root').eq(1).click()
    cy.get("[name='amount']").click().type('120')
    cy.get('#transaction-create-description-input').click().type('Pagamento')
    cy.get('[data-test="transaction-create-submit-payment"]').click()
    cy.get('.MuiAlert-message').should('contain', 'Transaction Submitted')
 })

 it.skip('Transaction - Fail', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('maia20')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-public-tab"]')

    cy.get(".MuiButton-contained").click()
    cy.get(".MuiFormControl-marginDense").click().type('Dina20')
    cy.get('.css-konndc-MuiListItemText-root').eq(1).click()
    cy.get("[name='amount']").click().type('120')
    cy.get('#transaction-create-description-input').click().type('Pagamento')
    cy.get('[data-test="transaction-create-submit-payment"]').click()


})

})