describe('Real World APP', () => {
    
  it('Transaction - Sucess', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('Mai')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-public-tab"]')
  
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-search-input"]').type('Dina20')
   cy.get('[data-test="user-list-item-_XblMqbuoP"]').click()
    cy.get('#amount').click().type('80')
    cy.get('#transaction-create-description-input').click().type('Pagamento')
    cy.get('[data-test="transaction-create-submit-payment"]').click()
    cy.get(':nth-child(2) > .MuiGrid-container > .MuiGrid-root > .MuiTypography-root')
    cy.get('.MuiAlert-message').should('contain', 'Transaction Submitted')

 })

   it('Transaction - Fail', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('Mai')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-public-tab"]')

    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-search-input"]').type('Dina20')
    cy.get('[data-test="user-list-item-_XblMqbuoP"]').click()
    cy.get('#amount').click().type('80')
    cy.get('#transaction-create-description-input').click().type('Pagamento')
    cy.get('[data-test="transaction-create-submit-payment"]').click()
    cy.get(':nth-child(2) > .MuiGrid-container > .MuiGrid-root > .MuiTypography-root')
    cy.get('.MuiAlert-message').should('contain', 'Transaction Submitted')
})

it('History - Sucess', () => { 
    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('Mai')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-public-tab"]')

    cy.get('[data-test="sidenav-home"] > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('[data-test="nav-personal-tab"]').click()

})

it('History - Fail', () => { 
    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('Ben')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-public-tab"]')

    cy.get('[data-test="sidenav-home"] > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('[data-test="nav-personal-tab"]').click()
    cy.get('[data-test="transaction-list-empty-create-transaction-button"]').should('contain', 'CREATE A TRANSACTION ')

})
})