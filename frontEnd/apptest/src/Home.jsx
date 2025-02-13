import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8081/')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
            <div className="container-fluid p-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="card shadow-lg rounded">
                            <div className="card-header text-center">
                                <h4>Lista de Usuarios</h4>
                                <div className="card-footer text-center">
                                    {
                                        //<button className="btn btn-success">➕ Agregar Usuario</button>
                                    }
                                    <Link to="/create" className='btn btn-success'>Add user +</Link>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-striped table-hover table-bordered">
                                        <thead className="table-dark text-center">
                                            <tr>
                                                <th>ID</th>
                                                <th>Usuario</th>
                                                <th>Contraseña</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((user, index) => (
                                                <tr key={index}>
                                                    <td className="text-center">{user.ID}</td>
                                                    <td>{user.usuario}</td>
                                                    <td>{user.password}</td>
                                                    <td className="text-center">
                                                        <Link to={`/read/${user.ID}`} className="btn btn-warning btn-sm mx-1">Read</Link>
                                                        <Link to={`/edit/${user.ID}`} className="btn btn-warning btn-sm mx-1">✏️ Editar</Link>
                                                        <Link className="btn btn-danger btn-sm">🗑️ Eliminar</Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;