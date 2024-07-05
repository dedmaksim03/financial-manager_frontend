import { instance } from "./config";

const AuthService = {
    
    login(username, password){
        return instance.post("/auth", {username, password})
    }
   
}

export default AuthService;