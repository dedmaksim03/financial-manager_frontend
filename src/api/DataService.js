import { instance } from "./config";

const AuthService = {
    
    getAllData(){
        let token = localStorage.getItem("token") == null ? '' : localStorage.getItem("token");
        return instance.get("/users/info", {
            headers: {
              Authorization: 'Bearer ' + token //the token is a variable which holds the token
            }
           });
    }
   
}

export default AuthService;

