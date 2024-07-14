import React from "react";
import { action, makeAutoObservable, runInAction } from "mobx";
import AuthService from "../../api/AuthService";
import DataService from "../../api/DataService";

class AuthStore { 
    isAuthInProgress = false;

    isAuth = false;

    allData = null;

    test = 0;

    constructor() { makeAutoObservable(this); }

    async login(username, password){
        this.isAuthInProgress = true;
        try{
            const response = await AuthService.login(username, password);
            localStorage.setItem("token", response.data.token);
            console.log(localStorage.getItem("token"));
            this.isAuth = true;
        } catch(err){
            console.log(err);
        } finally {
            this.isAuthInProgress = false;
        }
    }

    async getData(){
        console.log('load data')
        try{
            const response = await DataService.getAllData();
            console.log(response.data);

            runInAction(() => {
                this.allData = response.data;
            })

            this.setAllData(response.data);
            this.isAuth = true;
            return response
        } catch(err){
            localStorage.removeItem("token");
            this.isAuth = false;
            runInAction(() => {
                this.allData = null;
            })
            this.setAllData(null);
            console.log(err);
            return err;
        } 
    }

    setAllData = (allData) => {
        this.allData = allData;
    }
    
}
  
export default new AuthStore;