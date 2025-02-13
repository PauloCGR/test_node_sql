import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [values, setValues] = useState({
    name: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/user', values)
    .then(res => {
      console.log(res);
      navigate('/');
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Add User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" onChange={e => setValues({...values, name: e.target.value})} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" onChange={e => setValues({...values, password: e.target.value})} />
          </div>
          <button type="submit" className="btn btn-primary w-100">Save</button>
        </form>
      </div>
    </div>
  );
}

export default Create;