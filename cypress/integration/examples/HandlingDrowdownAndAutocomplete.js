
/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('checking static dropdowns',function() {
 
//checking static dropdown(hic options not dynamic based on inputs)
cy.visit(Cypress.env('url')+"/AutomationPractice/")
cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

//selecting from dropdown
cy.get('#autocomplete').type('tur')
//using each it will iterate each text in dropdown after type tur and it will pick the match one
// .ui-menu-item div = parent element(.ui-menu-item) space and child elements attribute(div)
cy.get('.ui-menu-item div').each(($el, index, $list) => {
    const text = Cypress.$($el).text().trim();
    if (text === "Turkey") {
        // Wait until the element is visible
        cy.wrap($el).should('be.visible').click();
    }
});
cy.get('#autocomplete').should('have.value','Turkey')



}  )
}  )