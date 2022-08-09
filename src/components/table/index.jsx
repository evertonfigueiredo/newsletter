import React from 'react';
import List from '../list';

// import { Container } from './styles';

function Table() {

    const [lead, setLead] = React.useState([{ "_id": "0", "name": "-", "email": "-" }])

    React.useEffect(() => {
        async function getUser() {
            const token = localStorage.getItem("token");
            fetch('http://localhost:8000/lead/all', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })
                .then(data => {
                    data.json().then((json) => {
                        if (!json.error) {
                            setLead(json.lead)
                        } else {
                            localStorage.removeItem("token");
                            localStorage.removeItem("user");
                            window.location.href = "/login";
                        }
                    });
                })
        }
        getUser()
    }, [])



    return <table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">NOME</th>
                <th scope="col">EMAIL</th>
            </tr>
        </thead>
        <tbody>

            {lead.map((l, index) =>
                <List key={l._id} name={l.name} index={index + 1} email={l.email} />
            )}

        </tbody>
    </table>;
}

export default Table;