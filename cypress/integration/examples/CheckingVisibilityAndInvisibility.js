/// <reference types="Cypress" />

describe('Testing Visiibility of element', function(){

    it('check hidden element', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //check if the element is visiable
        cy.get('#displayed-text').should('be.visible');
        //clicks the hide button
        cy.get('#hide-textbox').click();
        //check if text box should not be visiable
        cy.get('#displayed-text').should('not.be.visible')
        //click show button again
        cy.get('#show-textbox').click()


    })
})