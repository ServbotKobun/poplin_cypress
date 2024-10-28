export class paymentPage{

getCardNumber(){
    return cy.get('input[id="Field-numberInput"]')
}
getExpirationDate(){
    return cy.xpath('//*[@id="card-panel"]/div/div/form/div/div[1]/div[2]/div/div[1]/div/div')
}
getCVC(){
    return cy.xpath('//*[@id="card-panel"]/div/div/form/div/div[1]/div[3]/div')
}
getCountry(){
    return cy.xpath('//*[@id="Field-countryInput"]')
}
getPayButton(){
    return cy.get('#stripe-pay-button')
}

}