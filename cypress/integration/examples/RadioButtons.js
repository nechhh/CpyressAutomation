/// <reference types="Cypress" />

describe('Radio Buttons', function() 
{
 
it('Radio Buttons',function() {
 //CheckBoxes examples

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//Checking radio buttons and verifying it
cy.get("*[value='radio2']").check().should('be.checked')


}  )
}  )