import { instance } from "./config";

const AuthService = {
    
    getAllData(token){

        // instance.interceptors.request.use(
        //     (config) => {
        //         config.headers.Authorization = `Bearer ${token}`;
        //         return config;
        //     }
        // )

        return instance.get("/users/info", {
            headers: {
              Authorization: 'Bearer ' + token //the token is a variable which holds the token
            }
           });
    }
   
}

export default AuthService;

