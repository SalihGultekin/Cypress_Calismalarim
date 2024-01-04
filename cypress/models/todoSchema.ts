export default class Schema{
    private registerResponseSchema: object

    constructor(){
        this.registerResponseSchema = {
                "type": "object",
                "properties": {
                  "access_token": {
                    "type": "string"
                  },
                  "userID": {
                    "type": "string"
                  },
                  "firstName": {
                    "type": "string"
                  }
                },
                "required": [
                  "access_token",
                  "userID",
                  "firstName"
                ]
              }
        }
        getRegisterResponseSchema(){
            return this.registerResponseSchema;
        }
    }
