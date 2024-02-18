/// <reference types="Cypress" />

describe('Handling Alerts', function() 
{
 
it('Automaticlly confirm alert',function() {
 //CheckBoxes examples

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get("[id='alertbtn']").click()
cy.get('#confirmbtn').click()

// window:alert
cy.on('window:alert',(str)=>{
    //Assertion comes from mocha framework
    //comparing two string with mocha framework
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})


//confirm alert
cy.on('window:confirm',(str)=>{
    //Assertion comes from mocha framework
    //comparing two string with mocha framework
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})



}  )
}  )