import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';

const Home = () => {
  return (
    <div className={style.container}>
      <Link to='/login'>Ir a Login</Link>
      <Link to='/logup'>Ir a Logup</Link>
      <div className={style.img}></div>
    </div>
  );
};

export default Home;
