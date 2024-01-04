import { Faker, faker } from '@faker-js/faker';
export default class Todo{
    
    
    private firstName:string
    private lastName: string;
    private email: string;
    private password: string;
    private confirmPassword: string;

   
    constructor(){
        this.firstName = 'salih',
        this.lastName ='Gül'
        this.email=faker.internet.email()
        this.password= 'slhslh25.'
        this.confirmPassword = 'slhslh25.'
    }
    getfirstName(){
        return this.firstName
    }
    getlastname(){
        return this.lastName
    }
    getEmail(){
        return this.email
    }
    getPassword(){
        return this.password
    }
    getConfirmPassword(){
        return this.confirmPassword
        
    }
}