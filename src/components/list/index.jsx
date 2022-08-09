import React from 'react';

// import { Container } from './styles';

function List({ name, email, index }) {
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{name}</td>
            <td>{email}</td>
        </tr>
    );
}

export default List;