describe('Real World APP', () => {
  it('Login Success', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#username').type('Dina20')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-public-tab"]')


  })

  it('Login - Fail', () => {
   cy.visit('http://localhost:3000/')
    cy.get('#username').type('Dina')
    cy.get('#password').type('12354')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('.MuiAlert-message').contains('Username or password is invalid')


  })

  it('register - Sucess', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('Benjamin')
    cy.get('#lastName').type('Santos')
    cy.get('#username').type('Ben')
    cy.get('#password').type('s3cret')
    cy.get('#confirmPassword').type('s3cret')
    cy.get('[data-test="signup-submit"]').click()


})

 it('register - incomplet', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('Maia10')
    cy.get('#username').type('Mai')
    cy.get('#password').type('s3ct')
    cy.get('#confirmPassword').type('s3ct')
    cy.get('[data-test="signup-submit"]').click()


})

})

