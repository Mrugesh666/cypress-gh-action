export class LoginPage {

    username_textbox = '[name="username"]'          //Locator
    password_textbox = '[name="password"]'          //Locator
    login_button = '.oxd-button'               //Locator

    enterUsername(username) {

        cy.get(this.username_textbox).type(username)          //Function

    }
    enterPassword(password) {
        cy.get(this.password_textbox).type(password)          //Function
    }
    clickLogin() {
        cy.get(this.login_button).click()               //Function
    }
}                                                                       