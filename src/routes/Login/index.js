import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';
import style from './style.module.css';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    axios
      .post('https://ecommerce-exercise-backend.herokuapp.com/login/', data)
      .then((res) => {
        localStorage.setItem('token', res.data.access);
      })
      .catch((err) => err.message);
  };

  return (
    <div className={style.container}>
      <div className={style.img}></div>
      <form className={style.loginForm} onSubmit={handleSubmit(submit)}>
        <div className={style.example}>
          <h3
            style={{ alignSelf: 'center', fontSize: '15px' }}
            className={style.h3}
          >
            Puedes utilizar estos datos
          </h3>
          <p className={style.p}>E-mail: admin@admin.com</p>
          <p className={style.p}>Contraseña: root</p>
        </div>
        <div className={style.input}>
          <div className={style.input}>
            <label htmlFor='email'>E-mail: </label>
            <input
              type='email'
              {...register('email')}
              id={style.email}
              required
            ></input>
          </div>

          <div className={style.input}>
            <label htmlFor='password'>Contraseña: </label>
            <input
              type='password'
              {...register('password')}
              id={style.password}
              required
            />
          </div>

          <button className={style.botonLogin}>Ingresar</button>
        </div>
        <p style={{ alignSelf: 'center' }}>
          ¿No estás registrado?
          <Link to='../logup'>Regístrate</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
