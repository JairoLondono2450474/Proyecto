import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

//Componentes:
import Navbar from "./components/Navbar/Navbar";
import UserList from './components/User/UserList';
import UserForm from './components/User/UserForm';

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

export default function Curappa() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container my-4'>
        <Routes>
          <Route index element={<UserForm />} />
          <Route path='/user' element={<UserList />} />
          <Route path='/updateUser/:id' element={<UserForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Curappa />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
