import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Read() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8081/read/${id}`)
      .then(res => {
        console.log(res);
        setUser(res.data[0]);
      })
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
      <div className="card shadow-lg p-4" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">User Data</h2>
        {user ? (
          <>
            <ul className="list-group mb-3">
              <li className="list-group-item"><strong>ID:</strong> {user.ID}</li>
              <li className="list-group-item"><strong>Usuario:</strong> {user.usuario}</li>
              <li className="list-group-item"><strong>Password:</strong> {user.password}</li>
            </ul>
            <div className="d-flex justify-content-between">
              <Link to="/" className="btn btn-secondary">Back</Link>
              <Link to={`/edit/${user.ID}`} className="btn btn-primary">Edit</Link>
            </div>
          </>
        ) : (
          <p className="text-center text-muted">Loading user data...</p>
        )}
      </div>
    </div>
  );
}

export default Read;