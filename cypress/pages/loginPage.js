class LoginPage{
    selectoList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            signinButtom:'[data-test="signin-submit"]',
            Alertfail:'.MuiAlert-message',


        }
        return selectors
    }
    accessLoginPage () {
         cy.visit('/signin')

    }


    loginOfUser(username, password) {
        cy.get(this.selectoList().usernameField).click().type(username)
        cy.get(this.selectoList().passwordField).click().type(password)
        cy.get(this.selectoList().signinButtom).click()

    }

    loginOfUserFail(username, password){
        cy.get(this.selectoList().usernameField).type(username)
        cy.get(this.selectoList().passwordField).type(password)
        cy.get(this.selectoList().signinButtom).click()
        cy.get(this.selectoList().Alertfail).contains('Username or password is invalid')

    }

    loginTransationFail( username, password) {
        cy.get(this.selectoList().usernameField).type(username)
        cy.get(this.selectoList().passwordField).type(password)
        cy.get(this.selectoList().signinButtom).click()

    }
}
export default LoginPage