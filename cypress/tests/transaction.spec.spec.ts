import usersData from '../fixtures/users-data.json'
import LoginPage from '../pages/loginPage'
import TransactionPage from '../pages/transactionPage'


const loginPage = new LoginPage()
const transactionaPage = new TransactionPage()


describe('Real World APP', () => {
    it('Transaction - Sucess', () => {
        loginPage.accessLoginPage()
        loginPage.loginOfUser(usersData.userSucess.username,usersData.userSucess.password)
        transactionaPage.transactionSucess()
 })

 it.skip('Transaction - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginOfUserFail(usersData.userFail.username, usersData.userFail.password)
  


    cy.get(".MuiButton-contained").click()
    cy.get(".MuiFormControl-marginDense").click().type('Dina20')
    cy.get('.css-konndc-MuiListItemText-root').eq(1).click()
    cy.get("[name='amount']").click().type('120')
    cy.get('#transaction-create-description-input').click().type('Pagamento')
    cy.get('[data-test="transaction-create-submit-payment"]').click()


})

})