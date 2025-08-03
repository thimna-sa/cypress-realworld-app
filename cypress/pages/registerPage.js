class RegisterPage{
    selectoList() {
         const selectors = {
             firsNameRegist: "[name='firstName']",
             lastNameRegist: "[name='lastName']",
             userNameRegist: "[name='username']",
             passwordRegist: "[name='password']",
             confirmRegist: "[name='confirmPassword']",
             Buttomconfirmlogin: "[data-test='user-onboarding-next']",
             BankName:"('#bankaccount-bankName-input')",
             RoutingNumber: "('#bankaccount-routingNumber-input')",
             AccountNumber:"('#bankaccount-accountNumber-input')",
             ButttomSave: '[data-test="bankaccount-submit"]', 


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

    registerConfirm() {
        cy.get(this.selectoList().Buttomconfirmlogin).click()
        cy.get('#bankaccount-bankName-input').click().type('Benjamin')
        cy.get('#bankaccount-routingNumber-input').click().type('987845678')
        cy.get('#bankaccount-accountNumber-input').click().type('784512326')
        cy.get('[data-test="bankaccount-submit"]').click()


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