

class HomePage{

    
//declare webelement
getEditBox(){

     return cy.get("input[name='name']:nth-child(2)")
}

//The box on homepage when you write name, it fills in this box as well
getTwoWayDataBinding(){

    return cy.get(':nth-child(4) > .ng-untouched')
}
//gender dropdown on homePage
getGender(){

    return cy.get('#exampleFormControlSelect1')
}

//Shop tab 
getShopTab()
{
    return cy.get("a[href='/angularpractice/shop']")
}
//it is an element on page that on disable mod
getEntrepreneur()
{

    return cy.get('#inlineRadio3');
}





}


//writing this line JS will make the class available for all project
//and you neeed to import from other classes
export default HomePage;

