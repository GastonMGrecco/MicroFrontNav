import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import LogUp from './routes/LogUp';
import './style.css';

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path='/'
            element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logup' element={<LogUp />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
