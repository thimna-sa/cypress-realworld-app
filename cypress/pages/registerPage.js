class RegisterPage{
    selectoList() {
         const selectors = {
             firsNameRegist: "[name='firstName']",
             lastNameRegist: "[name='lastName']",
             userNameRegist: "[name='username']",
             passwordRegist: "[name='password']",
             confirmRegist: "[name='confirmPassword']",

        }
        return selectors
       
        }
    accessRegisterPage () {
        cy.visit('/signup')
        }


    registerNewUser(firstName, lastName, userName, password, passwordconfirm ) {
    cy.get(this.selectoList().firsNameRegist).type(firstName)
    cy.get(this.selectoList().lastNameRegist).type(lastName)
    cy.get(this.selectoList().userNameRegist).type(userName)
    cy.get(this.selectoList().passwordRegist).type(password)
    cy.get(this.selectoList().confirmRegist).type(passwordconfirm)
    cy.get('[data-test="signup-submit"]').click()
    }

    registerFail(firstName, lastName, password, passwordconfirm ) {
    cy.get(this.selectoList().firsNameRegist).type(firstName)
    cy.get(this.selectoList().lastNameRegist).type(lastName)
    cy.get(this.selectoList().passwordRegist).type(password)
    cy.get(this.selectoList().confirmRegist).type(passwordconfirm)
    cy.get('[data-test="signup-submit"]')
    }
}

export default RegisterPage