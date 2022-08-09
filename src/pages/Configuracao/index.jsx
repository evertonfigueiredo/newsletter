import React from 'react';
import AuthMiddleware from '../../authMiddleware';
import Header from '../../components/header';

// import { Container } from './styles';

function Configuracao() {
    return <>
        <AuthMiddleware page="Home" />
        <Header></Header>
        <div className="container">
            <div className='row justify-content-md-center'>
                <div className='col-md-8'>
                    <h1>Configuracao</h1>
                </div>
            </div>
        </div>
    </>;
}

export default Configuracao;