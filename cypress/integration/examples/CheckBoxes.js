
/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('testing checkboxes',function() {
 //CheckBoxes examples

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//be.checked assertion
//if you need to use multiple should after first one you will use .and
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
//uncheck and validate it.
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

//checking multiple checkboxes
cy.get("input[type='checkbox']").check(['option2','option3'])


}  )
}  )