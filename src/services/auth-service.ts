import QueryString from "qs";
import { CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import * as accessTokenRepository from '../localstorage/access-token-repository';

export function loginRequest(loginData: CredentialsDTO){
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)//WINDOW.BTOA é o algoritmo B64 do JS
    }
    const requestBody = QueryString.stringify({...loginData, grant_type: "password"})//transforma o JSON no formato "x-www-form-urlencoded"
    const config : AxiosRequestConfig = {
        method: 'POST',
        url: "/oauth/token",
        data: requestBody,
        headers
    }
    return requestBackend(config);
}

export function logout(){
    accessTokenRepository.remove();
}
export function saveAccessToken(token: string){
    accessTokenRepository.save(token);
}
export function getAccessToken(){
    return accessTokenRepository.get();
}