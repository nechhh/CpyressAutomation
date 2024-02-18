/// <reference types="Cypress" />

describe('Fake test for API', function()
{

    it('Fake test for API',function()
    {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
        //this is the way, how you can mock your request, So give the unauthorized user and verify the 403 unforbiden
        //intercept(method,url,request)
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
    (req)=>
    {
            //changed the author name 
            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
            //this will hit the server wiht already modified URL(above line)
            //and bause it is unauthorirezed user It will give 403 and you will verify it!
            req.continue((res)=>
            {
               // expect(res.statusCode).to.equal(403)
            })
         }
         ).as("dummyUrl")

        //click the button to hit the API for book library(from the DOM console network section)
        cy.get("button[class='btn btn-primary']").click()
        //You need to wait till promise is solved do not forget cypress is not syncronized 
        cy.wait('@dummyUrl')

        
    })
})