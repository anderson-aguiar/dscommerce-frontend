import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system";
import * as authService from '../services/auth-service';

export function requestBackend(config : AxiosRequestConfig){
    //testa se as configurações está com credenciais para acesso autorizado, se sim, acrescenta o "Authorization: .."
    const headers = config.withCredentials 
    ? {
        ...config.headers,
        Authorization: "Bearer " + authService.getAccessToken() 
    }
    : config.headers
    return axios({...config, baseURL: BASE_URL, headers});

}