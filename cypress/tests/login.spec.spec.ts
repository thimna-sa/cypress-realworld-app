import { use } from 'chai'
import usersData from '../fixtures/users-data.json'
import LoginPage from '../pages/loginPage'
import RegisterPage from '../pages/registerPage'



const loginPage = new LoginPage()
const registerPage = new RegisterPage()

describe('Real World APP', () => {


  

  it('Test Login Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginOfUser(usersData.userSucess.username,usersData.userSucess.password)

  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginOfUserFail(usersData.userFail.username, usersData.userFail.password)



  })

  it('register - Sucess', () => {
    registerPage.accessRegisterPage()
    registerPage.registerNewUser(usersData.registerDados.firsNameRegist, usersData.registerDados.lastNameRegist, usersData.registerDados.userNameRegist, usersData.registerDados.passwordRegist, usersData.registerDados.confirmRegist)
    


})

  it.only('register - Confirm', ()=> {
    loginPage.accessLoginPage()
    loginPage.loginOfUser(usersData.resgiterConfirm.username, usersData.resgiterConfirm.password)
    registerPage.registerConfirm()

/// caso tela fique branca reabra site para que o cypress consiga realizar login ** BUG JÁ NOTIFICADO***
})

  it('register - incomplet', () => {
    registerPage.accessRegisterPage()
    registerPage.registerFail(usersData.registerDados.firsNameRegist, usersData.registerDados.lastNameRegist, usersData.registerDados.passwordRegist, usersData.registerDados.confirmRegist)
   


})

})

