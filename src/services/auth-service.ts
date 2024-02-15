import QueryString from "qs";
import { AccessTokenPayloadDTO, CredentialsDTO, RoleEnum } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import * as accessTokenRepository from "../localstorage/access-token-repository";
import jwtDecode from "jwt-decode";

export function loginRequest(loginData: CredentialsDTO) {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET), //WINDOW.BTOA é o algoritmo B64 do JS
  };
  const requestBody = QueryString.stringify({
    ...loginData,
    grant_type: "password",
  }); //transforma o JSON no formato "x-www-form-urlencoded"
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/oauth/token",
    data: requestBody,
    headers,
  };
  return requestBackend(config);
}

export function logout() {
  accessTokenRepository.remove();
}
export function saveAccessToken(token: string) {
  accessTokenRepository.save(token);
}
export function getAccessToken() {
  return accessTokenRepository.get();
}

export function getAccessTokenPayload(): AccessTokenPayloadDTO | undefined {
  try {
    const token = accessTokenRepository.get();
    return token == null
      ? undefined
      : (jwtDecode(token) as AccessTokenPayloadDTO);
  } catch (error) {
    return undefined;
  }
}
export function isAuthenticated(): boolean {
  // eslint-disable-next-line prefer-const
  let tokenPayload = getAccessTokenPayload();
  if (tokenPayload && tokenPayload.exp * 1000 > Date.now()) {
    // multiplica por 1000 para igualar com a precisão do Date.now()
    return true;
  }
  return false;
}

export function hasAnyRoles(roles: RoleEnum[]) : boolean{
  if (roles.length === 0) {
    return true;
  }

  const tokenPayload = getAccessTokenPayload(); //usado para pegar o tokem e acessar o "authorities" que contém os ROLES

  if (tokenPayload !== undefined) {
    for (let i = 0; i < roles.length; i++) {
      if (tokenPayload.authorities.includes(roles[i])) {
        return true
      }
    }
    //return roles.some(role => tokenData.authorities.includes(role))
  }
  return false;
}
