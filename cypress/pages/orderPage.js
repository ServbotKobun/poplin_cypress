export class orderPage{

getCreateNewOrderButton(){
   return cy.get('#new-order-button') 
}
getStartNewOrder(){
    return cy.get('[ng-reflect-title="Start new order"] > #item-element')
} 
getRepeatLastOrder(){
   return  cy.get('[ng-reflect-title="Repeat last order"] > #item-element')
}
getSelectProfile(){
    return cy.get('#ion-select-component')
}
getChooseProfileContinue(){
    return cy.get('#choose-profile-continue-button')
}
getStandardDelivery(){
    return cy.get('.standard-delivery-col > poplin-radio-card > .radio-card > .radio-chip-container > poplin-radio-button > :nth-child(1) > .radio-button-div > #radio-')
}
getExpressDelivery(){
    return cy.get('.express-delivery-col > poplin-radio-card > .radio-card > .radio-chip-container > poplin-radio-button > :nth-child(1) > .radio-button-div > #radio-')
}
getDeliveryContinueButton(){
    return cy.get('#delivery-continue-button')
}
getSmalBagSize(){
   return cy.get('#stepper-small > .stepper-field > [icon="plus_custom"] > #button-element > #icon-element-wrapper > #icon-element')
}
getRegularBagSize(){
   return cy.get('#stepper-regular > .stepper-field > [icon="plus_custom"] > #button-element > #icon-element-wrapper > #icon-element')
}   
getLargeBagSize(){
   return cy.get('#stepper-large > .stepper-field > [icon="plus_custom"] > #button-element > #icon-element-wrapper > #icon-element') 
}  
getBagContinueButton(){
    return cy.get('#bag-continue-button')
}  
getOversizedItems(){
    return cy.get('#number-stepper-element > .stepper-field > [icon="plus_custom"] > #button-element > #icon-element-wrapper > #icon-element')
}  
getOversizedContinueButton(){
   return  cy.get('#oversized-continue-button')
}  
getLaundryProtectionCheck1(){
    return cy.get('#checkbox-drawer-checkbox-1')
}  
getLaundryProtectionCheck2(){
    return cy.get('#checkbox-drawer-checkbox-2')
}  
getLaundryProtectionCheck3(){
    return cy.get('#checkbox-drawer-checkbox-3')
}  
getDisclaimerContinue(){
    return cy.get('#drawer-modal-continue-button')
} 
getContinuePreferredPro(){
    return cy.get('#preferred-continue-button')
} 
getBasicCoverage(){
    return cy.get(':nth-child(1) > ion-col.ios > .ng-untouched > .radio-card > .radio-chip-container > poplin-radio-button > :nth-child(1) > .radio-button-div > #radio-')
} 
getPremiumCoverage(){
    return cy.get(':nth-child(2) > ion-col.ios > .ng-untouched > .radio-card > .radio-chip-container > poplin-radio-button > :nth-child(1) > .radio-button-div > #radio-')
} 
getPRemiumPlusCoverage(){
    return cy.get(':nth-child(3) > ion-col.ios > .ng-untouched > .radio-card > .radio-chip-container > poplin-radio-button > :nth-child(1) > .radio-button-div > #radio-')
} 
getCoverageContinueButton(){
    return cy.get('#coverage-continue-button')
} 
getDissmisPriceUpdate(){
    return cy.get('button')
} 
getPlaceOrder(){
    return cy.get('#place-order-button')
} 
}