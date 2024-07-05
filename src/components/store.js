import { makeAutoObservable } from "mobx";
import AuthService from "../api/AuthService";
import getDataService from "../api/DataService";

class AuthStore{
    isAuth = false;
    isAuthInProgress = false;

    constructor(){
        makeAutoObservable(this, {}, {autoBind: true});
    }

    async getData(){
        console.log('load data')
        try{
            const response = await getDataService.getData();
            console.log(response.data);
            localStorage.setItem("userData", response.data['data'][0]['account']);
            console.log(localStorage.getItem('userData'))
        } catch(err){
            console.log(err);
        } 
    }

    async login(username, password){
        this.isAuthInProgress = true;
        try{
            const response = await AuthService.login(username, password);
            localStorage.setItem("token", response.data.token);
            this.isAuth = true;
        } catch(err){
            console.log(err);
        } finally {
            this.isAuthInProgress = false;
        }
    }

    async checkAuth(){
        if (localStorage.getItem("token") == null || localStorage.getItem('token') == undefined){
            console.log('checkAuth: false');
            this.isAuth = false;
        } 
        else{
            console.log('store.js token', localStorage.getItem("token"))
            this.isAuth = true;   
            try {
                const response = await getDataService.getData()
            } catch (err) {
                console.log('Токен не валидный: ', err);
                this.isAuth = false;
            }       
        }

    }

    async logOut(){
        localStorage.setItem('token', null);
        this.isAuth = false;
    }


}

export default new AuthStore();