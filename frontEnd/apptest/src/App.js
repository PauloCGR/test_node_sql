import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Creat from './Create.js';
import Read from './Read.js';
import Update from './Update.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Create' element={<Creat />} />
        <Route path='/read/:id' element={<Read />} />
        <Route path='/edit/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
