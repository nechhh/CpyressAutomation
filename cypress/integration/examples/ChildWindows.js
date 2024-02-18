

describe('Handling Child Windowns', () => {

it('Should handle child window', () => {
//from the practice page click opentab button
// from the new opened page click "about us"
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

/**
 * Cypress does not inherently support switching between browser tabs. To work around this,
 * it's necessary to open child windows (links that would normally open in a new tab) in the same tab.
 * In HTML, elements intended to open in a new tab are usually marked with a "target" attribute.
 * Therefore, when you encounter an element with a "target" attribute in the HTML DOM, it's designed to open in a separate tab.
 * In Cypress, you can handle child windows by removing this "target" attribute at runtime before clicking the element.
 * This approach allows the child window content to load in the same tab, enabling Cypress to interact with it.
 */

cy.get('#opentab').invoke('removeAttr','target').click();

//WHEN YOU NEED TO HANGLE CHILD WINDOW IN YOUR DOMAIN, 
//cy.get("#navbarSupportedContent a[href='about.html']").click();

// WHEN THE DOMAIN IS TOTALLY CHANGE YOU NEED TO FOLLOW THIS APROACH
//you need to tell the cypress you're completly swithcing the domain. And It can know there is no disaggreament by following method
//performs your operations in this method and It will not give you error
cy.origin("https://www.qaclickacademy.com/", () => {

cy.get("#navbarSupportedContent a[href='about.html']").click();
cy.get('.mt-50 h2').should('contain','QAClick Academy')

})




});


});