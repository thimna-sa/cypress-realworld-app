import { contains } from "cypress/types/jquery"
import usersData from "../fixtures/users-data.json"
import LoginPage from '../pages/loginPage'
import ExtratoPage from '../pages/extratoPage'



const loginPage = new LoginPage()
const extratoPage = new ExtratoPage()

describe('Real World APP', () => {
  it('Extrato de transações', () => {
    loginPage.accessLoginPage()
    cy.get('#username').click().type('Ben')
    cy.get('#password').click().type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
 extratoPage.extratoVerification()
    //loginPage.loginOfUser(usersData.userExtrato.username)
  //  loginPage.loginOfUser(usersData.userExtrato.password)
   
    
  




})
})