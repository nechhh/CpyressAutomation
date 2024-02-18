
//before each implement the logic to import data from fixtures before each execution 

beforeEach(()=>
{
    cy.fixture('example').then(function(data)
    {
        this.data=data
    })
});