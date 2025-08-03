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

 it('Transaction - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginOfUser(usersData.TransactionFail.username, usersData.TransactionFail.password)
    transactionaPage.transactionFail()
   





})

})