/// <reference types="Cypress" />


describe('Mouse Hower', function() 
{
 
it('Mouse Hower',function() {
 //CheckBoxes examples

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//when your mouse on the element using JQuery method invoke('show), It will now show all hidden elements.
cy.get('.mouse-hover-content').invoke('show')
cy.contains('Top').click()
//this line test our url any specific elements
cy.url().should('include','top')



//THIS METHOD WILL CLICK HIDDEN ELEMENT, Only cypress has this feature;
//cy.contains('Top').click({force: true})



}  )
}  )