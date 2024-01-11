import { Navigate } from "react-router-dom";
import * as authService from '../../services/auth-service';

type Props = {
    children: JSX.Element;
}
//Verifica se o usuario está logado, se não estiver, direciona para o "/login"
export function PrivateRoute({children} : Props){
    if(!authService.isAuthenticated()){
        return <Navigate to="/login" />
    }
    return children;
}