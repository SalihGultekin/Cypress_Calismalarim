import { Faker, faker } from "@faker-js/faker"
import { utils } from "mocha";
import SchemaUtils from "../../utils/SchemaValidationUtils";
import Schema from "../../models/todoSchema";

export class RegisterTodo{
    private randomEmail=faker.internet.email()
    private randomPassword=faker.internet.email()
    


    registerUser(){
        const util=new SchemaUtils()
        const schema=new Schema()
        const userData = {
            firstName: 'salih',
            lastName: 'gül',
            email: this.randomEmail,
            password:this.randomPassword,
           
          };
          cy.request({
            method: 'POST',
            url: 'https://todo.qacart.com/api/v1/users/register', 
            body: userData,
          }).then((response) => {

            expect(response.status).to.equal(201);
            expect(response.body.firstName).to.eq(userData.firstName)
            expect(util.getSchema(schema.getRegisterResponseSchema(),response))
            
          });
    }
}