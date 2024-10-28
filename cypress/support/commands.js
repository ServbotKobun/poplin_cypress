require('cypress-xpath');
require('cypress-iframe');
import {Commons} from "../pages/commons";
import {loginPage} from "../pages/loginPage";
import {orderPage} from "../pages/orderPage";
import { paymentPage } from "../pages/paymentPage";

const commons = new Commons();
const login = new loginPage();
const order= new orderPage();
const payment= new paymentPage();

Cypress.Commands.add('navigateToLoginPage', () => {
    commons.getCurrentUrl().should('contain', Cypress.config().baseUrl);
    login.getEmailButton().click({ multiple: true });
    login.getEmailInput().type(Cypress.config().email);
    login.getEmailLoginButton().click({ multiple: true });
    login.getPasswordInput().type(Cypress.config().password);
    login.getPasswordLoginButton().click();
    cy.wait(3000)
    commons.getCurrentUrl().should('contain', 'laundry');
})

Cypress.Commands.add('orderPlacementNew', () => {
    order.getCreateNewOrderButton().click();
    order.getStartNewOrder().click();
    order.getChooseProfileContinue().click();
    order.getStandardDelivery().click();
    order.getDeliveryContinueButton().click();
    order.getSmalBagSize().click();
    order.getBagContinueButton().click();
    order.getOversizedContinueButton().click();
    order.getLaundryProtectionCheck1().click();
    order.getLaundryProtectionCheck2().click();
    order.getLaundryProtectionCheck3().click();
    order.getDisclaimerContinue().click();
    order.getContinuePreferredPro().click();
    order.getBasicCoverage().click();
    order.getCoverageContinueButton().click();
    order.getDissmisPriceUpdate().click();
    order.getPlaceOrder().click();
    //cy.wait(10000)
    //cy.get('iframe').find(payment.getCardNumber()).type('4242424242424242');
    //cy.get('iframe').find(payment.getExpirationDate()).should('have.text', 'MM/YY')
    //cy.get('iframe').find(payment.getCVC().type()).should('have.text', 'CVC')
    //cy.get('iframe').find(payment.getPayButton()).should('have.text', 'Pay')
    //commons.getCurrentUrl().should('contain', 'laundry');
})
Cypress.Commands.add('orderPlacementRepeatPrevious', () => {
    order.getCreateNewOrderButton().click();
    order.getRepeatLastOrder().click();
    order.getContinuePreferredPro().click();
    order.getDissmisPriceUpdate().click();
    order.getPlaceOrder().click();
    cy.wait(10000)
})
Cypress.Commands.add('alternateOrderPlacementNew', () => {
    order.getCreateNewOrderButton().click();
    order.getStartNewOrder().click();
    order.getChooseProfileContinue().click();
    order.getExpressDelivery().click();
    order.getDeliveryContinueButton().click();
    order.getLargeBagSize().click();
    order.getBagContinueButton().click();
    order.getOversizedItems().click();
    order.getOversizedContinueButton().click();
    order.getLaundryProtectionCheck1().click();
    order.getLaundryProtectionCheck2().click();
    order.getLaundryProtectionCheck3().click();
    order.getDisclaimerContinue().click();
    order.getContinuePreferredPro().click();
    order.getBasicCoverage().click();
    order.getCoverageContinueButton().click();
    order.getDissmisPriceUpdate().click();
    order.getPlaceOrder().click();
    //cy.wait(10000)
    //cy.get('iframe').find(payment.getCardNumber()).type('4242424242424242');
    //cy.get('iframe').find(payment.getExpirationDate()).should('have.text', 'MM/YY')
    //cy.get('iframe').find(payment.getCVC().type()).should('have.text', 'CVC')
    //cy.get('iframe').find(payment.getPayButton()).should('have.text', 'Pay')
    //commons.getCurrentUrl().should('contain', 'laundry');
})
