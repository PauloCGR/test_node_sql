import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8081/read/${id}`)
            .then(res => {
                console.log(res);
                const dt = res.data[0];
                setValues({...values, name: dt.usuario, password: dt.password});
            })
            .catch(err => console.log(err));
    }, [id]);

    const [values, setValues] = useState({
        name: '',
        password: ''
    })

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id, values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
            <div className="card shadow p-4" style={{ width: '400px' }}>
                <h2 className="text-center mb-4">Edit User</h2>
                <form onSubmit={handleUpdate}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Enter your name" value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="text" className="form-control" placeholder="Enter your password" value={values.password} onChange={e => setValues({ ...values, password: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update