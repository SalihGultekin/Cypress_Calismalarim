import Todo from "../models/todo"


export default class RegisterPage{

registerLocators={
    firstName:"input[data-testid='first-name']",
    lastName:"input[data-testid='last-name']",
    email:"input[data-testid='email']",
    password:'[data-testid="password"]',
    confirmPassword:'[data-testid="confirm-password"]',
    signup:'[data-testid="submit"]',
    allertMessage:'[data-testid="welcome"]',
    
    
}
load(){
    cy.visit('https://todo.qacart.com/signup')
}
registerAdd(register:Todo){
    
    cy.get(this.registerLocators.firstName).type(register.getfirstName())
    cy.get(this.registerLocators.lastName).type(register.getlastname())
    cy.get(this.registerLocators.email).type(register.getEmail())
    cy.get(this.registerLocators.password).type(register.getPassword())
    cy.get(this.registerLocators.confirmPassword).type(register.getConfirmPassword())
    cy.get(this.registerLocators.signup).click()
    }
    registerMessageGoodEveninSalih(register:Todo){
        cy.get(this.registerLocators.allertMessage).should('contain','Good')
    }
}