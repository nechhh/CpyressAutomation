/// <reference types="Cypress" />

describe('Fake test for API', function()
{

    it('Fake test for API',function()
    {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
        

        //intercept mean yolunu kesmek, durdurmak 
        //Here cypress will listen this API, Before it send the data to server It will stop in and send your mock data (below statuscode and body)
        //This is the path how you can mock your response
        cy.intercept(
            //first parameter is request parameter
            {
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

            

        },
        //response parameter
        {
            statusCode : 200,
            body :[ {
                        "book_name": "RestAssured with Java",
                        "isbn": "BSG",
                        "aisle": "2302"
                    }]

        //.as() is used or reusaes             
        }).as('bookretrievals')

        cy.get("button[class='btn btn-primary']").click();
        //it will wait till the promise(@bookRetrievals) is resolved

        //This is integration testing cy.get('tbody tr') is getting number of rows in UI and 
        
        //.should('have.length',response.body.length+1) will compare the data with the Json data You have provided
        cy.wait('@bookretrievals').then(({ response }) => {
            // Calculate the expected length based on the response
            const expectedLength = response.body.length;
        
            // Now return this value so it can be used in the next chain
            return expectedLength;
        }).then((expectedLength) => {
            // Use the expectedLength here for your assertion
            cy.get('tr').should('have.length', expectedLength+1);
        });
        //put the validation for text "Oops only 1 Book available"
        cy.get('p').should('have.text','Oops only 1 Book available')

    })
})