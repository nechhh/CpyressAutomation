/// <reference types="Cypress" />


/**
 * TEST CASE
 * Go to specified webpage
 * verify the product(middle column)
 * and also price for the same product
 */
 
describe('Handling Tables', function() 
{
 
it('Testing Tables',function() {
 

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {


const text=$e1.text()
//there is a table youre getting the value of second column 
if(text.includes("Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C")){
    
    //this line will move you to the next table data, this is how you can reach an element through siblings  .eq(index).next() will move you to next line
    cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){

       var priceText=  price.text()
       expect(priceText).to.equal('20');
    })
}



})


} )
} )