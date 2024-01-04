
import { RegisterTodo } from "../api/login/registerTodoApi";
import RegisterPage from "../pages/RegisterPages";
import SchemaUtils from "../utils/SchemaValidationUtils";
describe('API Register Test', () => {
    
  const registerTodo=new RegisterTodo()
    it('should register a user via API', () => {
      registerTodo.registerUser()
    });
  });