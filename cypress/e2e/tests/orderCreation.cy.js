import {commonHelpers} from "../../support/commonHelpers";

const helper = new commonHelpers();

describe('Order Creation ', function () {
    // Open the URL befor each Test
    beforeEach(() => {
            cy.clearAllCookies();
            cy.clearAllLocalStorage();
            cy.clearAllSessionStorage();
            helper.getUrl();
        })
        
    
    
    xit('Order Creation (Positive Flow - New Order)', () => {
        cy.navigateToLoginPage();
        cy.wait(5000);
        cy.orderPlacementNew();
        cy.wait(20000);
        
    })
    xit('Order Creation (Positive Flow - Repeat Last Order)', () => {
        cy.navigateToLoginPage();
        cy.wait(5000);
        cy.orderPlacementRepeatPrevious();
    })
    xit('Order Creation (Alternate form Fill- New Order)', () => {
        cy.navigateToLoginPage();
        cy.alternateOrderPlacementNew();
    })
    xit('Order Creation (New Order-Input Error Message validation)', () => {
        cy.navigateToLoginPage();
        
    })
    xit('Order Creation (New Order-Empty Error Message validation)', () => {
        cy.navigateToLoginPage();
    })

 })