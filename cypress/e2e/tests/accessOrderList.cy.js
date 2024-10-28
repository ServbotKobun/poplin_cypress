import {commonHelpers} from "../../support/commonHelpers";

const helper = new commonHelpers();

describe('Access to Active Orders', function () {
    // Open the URL befor each Test
    beforeEach(() => {
            cy.clearAllCookies();
            cy.clearAllLocalStorage();
            cy.clearAllSessionStorage();
            helper.getUrl();
        })
        
    
    
    it('Access to Active Orders', () => {
        cy.navigateToLoginPage();
    })
 })