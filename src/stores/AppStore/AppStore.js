import React from "react";
import { makeAutoObservable } from "mobx";

class Store { 
    data = 1;
    increaseData = () => { this.data += 1 } 

    decreaseData = () => { this.data -= 1}
    
    constructor() { makeAutoObservable(this); }
    
  }
  
const store = new Store();
export default store;