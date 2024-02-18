/// <reference types="Cypress" />
const neatCSV=require('neat-csv')

let productName


describe('JWT Session Token', ()=>
{

    it('is loggen in through local storage', ()=>
    {
        //This method comes from support>commands.js, and you stored JWT token as env.variable
        //the reason you use then here, because the method does not comes from cypress. and it does not know what to do, you need to solve it!
        cy.LoginAPI().then(function()
    {

            //what youre doing here, you method is simply tells before you go this web, From DOM>Application(on top next to network)>
            // and local storage(on the left side), put token there in this way you will not need login but you will be logged in
            //cy.visit has options as passing second argument
            cy.visit("https://rahulshettyacademy.com/client",
        {
                //this method will perform the acction before it hit the url
                //and cypress can not do that you can do that by JavaScript
                onBeforeLoad :function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })


        })

        cy.get(".card-body b").eq(1).then(function(ele)
      {
      productName =  ele.text();
      })
        

        cy.get(".card-body button:last-of-type").eq(1).click();
        cy.get("[routerlink*='cart']").click();
        cy.contains("Checkout").click();
        cy.get("[placeholder*='Country']").type("ind")

        cy.get('.ta-results button').each(($e1, index, $list) => {

            if($e1.text()===" India")
            {
                cy.wrap($e1).click()
            }
        })
        cy.get(".action__submit").click();
        cy.wait(2000)
        cy.get(".order-summary button").eq(0).click();

        cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_necirvanurekk.csv")
  .then(async(text)=>
  {
    const csv =  await neatCSV(text)
    console.log(csv)
    const actualProductCSV = csv[0]["Product Name"]
    expect(productName).to.equal(actualProductCSV)

  
  })


    })

})