import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './routes/Login';
import LogUp from './routes/LogUp';
import './style.css';

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<h1>This is a simple Home</h1>} />
          <Route path='/login' element={<Login />} />
          <Route path='/logup' element={<LogUp />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
