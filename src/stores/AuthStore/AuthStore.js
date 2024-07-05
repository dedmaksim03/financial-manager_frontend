import React from "react";
import { makeAutoObservable } from "mobx";
import AuthService from "../../api/AuthService";
import DataService from "../../api/DataService";

class AuthStore { 
    isAuthInProgress = false;

    token = null;

    allData = null;

    test = 0;

    constructor() { makeAutoObservable(this); }

    async login(username, password){
        this.isAuthInProgress = true;
        try{
            const response = await AuthService.login(username, password);
            this.token = response.data.token;
            console.log(this.token);
            // localStorage.setItem("token", response.data.token);
        } catch(err){
            console.log(err);
        } finally {
            this.isAuthInProgress = false;
        }
    }

    async getData(){
        console.log('load data')
        if (this.token == null)
            return null;
        try{
            const response = await DataService.getAllData(this.token);
            console.log(response.data);
            this.allData = response.data;
            this.test = 1;
            return response
            // localStorage.setItem("userData", response.data['data'][0]['account']);
            // console.log(localStorage.getItem('userData'))
        } catch(err){
            console.log(err);
        } 
    }
    
}
  
export default new AuthStore;