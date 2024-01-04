
import { create } from "cypress/types/lodash";
import Todo from "../models/todo";
import Register from "../models/todo";
import RegisterPage from "../pages/RegisterPages";

describe('Add Register', () => {
    const getRegister=new RegisterPage()
    const user=new Todo()

    it('Pozitif Senario Register', () => {
        getRegister.load()
        getRegister.registerAdd(user)
        getRegister.registerMessageGoodEveninSalih(user)
    });
});