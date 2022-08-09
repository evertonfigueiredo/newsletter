import React from 'react';
import AuthMiddleware from '../../authMiddleware';
import Header from '../../components/header';
import Table from '../../components/table';

// import { Container } from './styles';

function Home() {

    return (
        <>
            <AuthMiddleware page="Home" />
            <Header></Header>
            <div className="container">
                <div className='row justify-content-md-center'>
                    <div className='col-md-8'>
                        <Table />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;