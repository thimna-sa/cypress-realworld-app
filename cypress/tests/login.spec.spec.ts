describe('Real World APP', () => {

    const selectorList  = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      signinButtom:'[data-test="signin-submit"]',
      Alertfail:'.MuiAlert-message'

    }

  it('Login Success', () => {
    cy.visit('http://localhost:3000/')
    cy.get(selectorList.usernameField).type('Dina20')
    cy.get(selectorList.passwordField).type('s3cret')
    cy.get(selectorList.signinButtom).click()
    cy.get('[data-test="nav-public-tab"]')


  })

  it('Login - Fail', () => {
   cy.visit('http://localhost:3000/')
    cy.get(selectorList.usernameField).type('Dina')
    cy.get(selectorList.passwordField).type('12354')
    cy.get(selectorList.signinButtom).click()
    cy.get(selectorList.Alertfail).contains('Username or password is invalid')


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
    cy.get('[data-test="signup-submit"]')


})

})

