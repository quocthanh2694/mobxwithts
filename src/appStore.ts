import { createContext } from "react";
import { authApi } from "./api/auth.api";
import { observable } from "mobx";

class AppStore {


    constructor() {
        console.log('Hello from app store');
        authApi.hello({});
    }

}

export default createContext(new AppStore());
