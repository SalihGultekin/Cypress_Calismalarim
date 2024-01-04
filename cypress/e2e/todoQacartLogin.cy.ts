import { RegisterTodo } from "../api/login/registerTodoApi";
import Todo from "../models/todo";
import { general, loginPage, text } from "../support/todoSelectors";
const todo=require("../fixtures/todo.json")
describe('todo login and aplication',{retries:1}, () => {
    const data=new Todo()

        it('login and aplication', () => {
         cy.visit(todo.urlLogin)
         cy.sendkeys(loginPage.email,todo.email)
         cy.sendkeys(loginPage.password,data.getPassword())
         cy.clickk(loginPage.loginButton)

        cy.assertGetByText(general.welcome,data.getfirstName())
        cy.assertGetByText(general.newTodo,text.newTodoText)
        //Add todo
        cy.clickk(general.addButton)
        cy.assertGetByText(general.headers,text.createTodoText)
        //create and delete
        cy.sendkeys(general.textBox,todo.message)
        cy.clickk(general.createButton)
        cy.clickk(general.deleteButton)
            
        });
        
    });