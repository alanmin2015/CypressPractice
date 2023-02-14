const cypressConfig = require("../../cypress.config")

describe('Part 1: Load the page, entering Username and Password; submit button', function(){
    it('Should load the page',function(){
        cy.visit('/Lab2.html');
    })
    
    it("Should submit the form by click button", ()=>{
        cy.get('form[name="formLog"]').submit()
    })

    it("Should accept the Username", ()=>{
        cy.get('input[name="login__Name"]').type("Alan").should('have.value',"Alan")
    })

    it("Should accept the Password", ()=>{
        cy.get('input[name="login__Pwd"]').type("123456").should('have.value',"123456")
    })
});

describe('Part 2: submit the form and output div shows', function(){
    it("When the form submits, the hidden output div appears, and the User should see the values entered for username & password in the output div.",()=>{
        cy.reload();
        cy.get('input[name="login__Name"]').type("Alan").should('have.value',"Alan");
        cy.get('input[name="login__Pwd"]').type("123456").should('have.value',"123456");
        cy.get('input[name="Login_Submit"]').click();
        cy.get('.outMessage').should('have.css', 'display', 'block');
        cy.get('.outMessage__Name').should('contain',"User Name: Alan");
        cy.get('.outMessage__Pwd').should('contain',"Password: 123456");
    })
});


describe('Part 3.a: Empty Username', function(){
    it("the Username should turn red and focus if the box is empty when the form submits",()=>{
        cy.reload();
        cy.get('input[name="Login_Submit"]').click();
        cy.get('input[name="login__Name"]').should('have.value',"").should('have.focus')
        cy.get('input[name="login__Name"]').should('have.css', 'background-color', 'rgb(255, 0, 0)')
    })
});

describe('Part 3.b: Empty Password', function(){
    it("the Username should turn red and focus if the box is empty when the form submits",()=>{
        cy.reload();
        cy.get('input[name="login__Name"]').type("Alan").should('have.value',"Alan")
        cy.get('input[name="Login_Submit"]').click()
        cy.get('input[name="login__Pwd"]').should('have.value',"").should('have.focus')
        cy.get('input[name="login__Pwd"]').should('have.css', 'background-color', 'rgb(255, 0, 0)')
    })
});