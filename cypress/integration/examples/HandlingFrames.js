/// <reference types="Cypress" />
/// <reference types="Cypress-iframe"/>
import 'cypress-iframe'

describe('Handling Frames', function() 
{
 
it('Handling Frames',function() {


cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//getting frame object
cy.frameLoaded('courses-iframe')
// it will swith iframe mood
cy.iframe().find("div a[href='mentorship']").eq(0).click()




}  )
}  )