import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home/HomeApp';
import Login from './routes/Login/LoginApp';
import LogUp from './routes/LogUp/LogupApp';
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
