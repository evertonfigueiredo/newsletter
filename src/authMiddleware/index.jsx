// import { Container } from './styles';

function AuthMiddleware({page}) {
    const token = localStorage.getItem("token");
    
    if (!token && page !== "Login") {
        window.location.href = "/login";
    }

    if(page === "Login" && token){
        window.location.href = "/";
    }

}

export default AuthMiddleware;