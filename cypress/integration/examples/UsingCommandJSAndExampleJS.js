//this line aoutofill syntax
/// <reference types="Cypress" />
//iport HomePage
import HomePage from "./pageObjects/HomePage"
import ProductPage from "./pageObjects/ProductPage"




describe('Test Framework', function() 
{

    before(() => {
        // runs once before all tests

        cy.fixture('example').then(function(data){

            this.data=data
        })
      })
 
it('Test Framework',function() {
 
  //creating object of HomePage class to use elements
  const homePage= new HomePage();  
  const productPage=new ProductPage();
  
  //calling url from cypress.config.js
cy.visit(Cypress.env('url')+"/angularpractice/")

//those name and gender stored in fixture and you're retriving 
homePage.getEditBox().type(this.data.name)
homePage.getGender().select(this.data.gender)

//verify the data is match with whatever your input
homePage.getTwoWayDataBinding().should('have.value',this.data.name)

//Asserting attribute 
homePage.getEditBox().should('have.attr','minlength','2')
//Check if element is disable//for behaviors use be.

homePage.getEntrepreneur().should('be.disabled')
Cypress.config('defaultCommandTimeout',8000)

//if you need to stop execution and debug the previous step to see what is happening use pause() or debug()
//it is only for debuging when you resolve issue, remove it from your test.
//cy.pause()


//this command is comming from support>command.js, We declared it!
//TEST CASE
//Click on shop button
//Select Two Item and Add To chart
homePage.getShopTab().click()

//accessing stored data from fixtures>example.json //this is how you can access the array you stored in example.json: this.data.productName
//SelectPorduct is a custom function we declared in support>command.js
//product name is an array we declare in fixtures>example.json it contains our input data
this.data.productName.forEach(function(element){
   
    cy.selectProduct(element)
})
//test case
//click on chenkout btn
productPage.getCheckoutBtn().click();

//Test Case
//Write a login that take the values of the items in your chart and collect them and verifys the Total Price is correct!
var sum=0;
cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

  var priceText=$el.text()
  //you got the prices for items but they are not plain you need to remove unneccesary spaces and characters from it!
  var res=priceText.split(" ")
  res=res[1].trim()
  //in Js there  is a method called Number if you send your string wrapped by this method, it will convert to int
  sum=Number(sum)+Number(res);
  

}).then(function(){

  cy.log("Sum of products: "+sum)
})

cy.contains('Checkout').click()


//type delivery country in autofill dropdown
cy.get('#country').type('india')
 //setting timeout in speclever it mean not the global one only for that test case

 Cypress.config('defaultCommandTimeout',7000)
 //click on term checkbox 
cy.get('.suggestions > ul > li > a').click()
//because checkbox is wrapped by another elements force to click it 
cy.get('#checkbox2').click({force: true})
//click purchase button
cy.get("input[value='Purchase']").click()
//below way of verifiying success message fails because text exactly does not match use include method instead // if the text match use this way 
//cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks')

//if you need to contain method for verifying any text follow this approach!
cy.get('.alert').then(function(element){
 
  var actualText=element.text()
  //this chai assertion returns true if it match, You do not need if statement in this way
  expect(actualText.includes("Success! Thank you!")).to.be.true 
})









}  )
}  )