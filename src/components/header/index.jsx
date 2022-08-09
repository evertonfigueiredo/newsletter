import React from 'react';
import { Link } from "react-router-dom";
// import { Container } from './styles';

function Header() {

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
    };

    return <nav className="navbar bg-light">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">Dashboard</Link>
            <div className="d-flex" role="search">
                <Link to="/" className='mr-sm-2'>Lista de Lead </Link>
                <Link to="/envio" className='mr-sm-2'>Enviar E-mail </Link>
                <Link to="/configuracao" className='mr-sm-2'>Configurações </Link>
                <a href='/#' className='mr-sm-2 ml-4' onClick={handleLogout} >Logout </a>
            </div>
        </div>
    </nav>;
}

export default Header;