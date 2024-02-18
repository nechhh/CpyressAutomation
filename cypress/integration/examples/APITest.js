/// <reference types="Cypress" />


describe('API Testing Without UI', function()
{

    it('API Testing Without UI',function()
    {

        //cy.request(method, url, body)
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php',
         {
            "name": "Learn Appium Automation with java",
            "isbn":"bcdsss",
            "aisle":"22s7",
            "author":"John foe"
        }
         //You need to capture the response and put the validations
        ).then(function(response)
        {
            //put validations
           expect(response.body).to.have.property("Msg","successfully added")
           expect(response.status).to.eq(200)
        })

       
       
    })

    
})