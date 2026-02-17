import { LoginPage } from "./Pages/login_page"
const loginPage = new LoginPage()

describe('Login_Test', function() {

    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })          

it.skip('Test_case 1', function() {

    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()

})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

it('Test_case 2', function() {
 

    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()

})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          


})

