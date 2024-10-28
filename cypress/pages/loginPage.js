export class loginPage{

getEmailButton(){
    return cy.get('[label="Continue with Email"] > #phone-login-button')
}
getEmailInput(){
    return cy.get('#email-container ')
}
getEmailLoginButton(){
    return cy.get('#email-login-button')
}
getPasswordInput(){
    return cy.get('#enter-password-container')
}
getPasswordLoginButton(){
    return cy.get('#enter-password-login-button')
}
}