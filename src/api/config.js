import axios from "axios";
import { useAuthStore } from "../stores/AuthStore/AuthStoreProvider";

export const instance = axios.create({
    withCredentials: false, // К запросу будут прикрепляться куки
    baseURL: "http://localhost:8080/api/v1/"
});
