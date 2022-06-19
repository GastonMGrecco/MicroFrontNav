import React, { useState } from 'react';
import ver from './assets/ver.png';
import nover from './assets/nover.png';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import style from './style.module.css';

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [vista, setVista] = useState(false);
  const submit = (data) => {
    axios
      .post('https://ecommerce-exercise-backend.herokuapp.com/users/', data)
      .then(navigate('../login'))
      .catch((error) => error.response);
  };

  return (
    <div className={style.login}>
      <form className={style.loginForm} onSubmit={handleSubmit(submit)}>
        <div className={style.input}>
          <div className={style.ingreso}>
            <label htmlFor='email'>E-mail: </label>
            <input
              type='email'
              {...register('email')}
              id='email'
              required
            ></input>
          </div>
          <div className={style.ingreso}>
            <label htmlFor='nombre'>Nombres: </label>
            <input
              type='text'
              {...register('first_name')}
              id='nombre'
              required
            ></input>
          </div>
          <div className={style.ingreso}>
            <label htmlFor='apellido'>Apellido: </label>
            <input
              type='text'
              {...register('last_name')}
              id='apellido'
              required
            ></input>
          </div>

          <div className={style.ingreso}>
            <label htmlFor='password'>Contraseña: </label>
            <input
              type={vista === false ? 'password' : 'text'}
              {...register('password')}
              id='password'
              required
            ></input>
            <button
              type='button'
              className={style}
              onClick={() => setVista(!vista)}
            >
              {vista === false
                ? (
                <img
                  title='Mostrar contraseña'
                  className={style.ojo}
                  src={ver}
                  alt=''
                />
                  )
                : (
                <img
                  title='Ocultar contraseña'
                  className={style.ojo}
                  src={nover}
                  alt=''
                />
                  )}
            </button>
          </div>
        </div>
        <button className={style.botonLogin}>Ingresar</button>
        <p style={{ alignSelf: 'center' }}>
          ¿Ya estás registrado?<Link to='../login'>Inicia Sesión</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
