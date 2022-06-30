import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import PropTypes from 'prop-types';
import style from './style.module.css';

const SignUp = ({ history }) => {
  const { register, handleSubmit } = useForm();
  const submit = async (data) => {
    try {
      await axios.post('https://ecommerce-exercise-backend.herokuapp.com/users/', data);
      history.push('../login');
    } catch {
      alert('no phas podido registrarte');
    }
  };

  return (
    <div className={style.container}>
      <div className={style.tittleimg}>
        <h1>MicroFrontendLogupComponent</h1>
        <div className={style.img}></div>
      </div>
      <form className={style.loginForm} onSubmit={handleSubmit(submit)}>
        <div className={style.input}>
          <div className={style.input}>
            <label htmlFor='email-logup'>E-mail: </label>
            <input
              type='email'
              {...register('email')}
              id='email-logup'
              required
            ></input>
          </div>
          <div className={style.input}>
            <label htmlFor='nombre'>Nombres: </label>
            <input
              type='text'
              {...register('first_name')}
              id='nombre'
              required
            ></input>
          </div>
          <div className={style.input}>
            <label htmlFor='apellido'>Apellido: </label>
            <input
              type='text'
              {...register('last_name')}
              id='apellido'
              required
            ></input>
          </div>

          <div className={style.input}>
            <label htmlFor='password'>Contraseña: </label>
            <input
              type='password'
              {...register('password')}
              id='password'
              required
            />
          </div>
        </div>
        <button className={style.botonLogin}>Ingresar</button>
        <p style={{ alignSelf: 'center' }}>
          {/* ¿Ya estás registrado?<Link to='../login'>Inicia Sesión</Link> */}
        </p>
      </form>
    </div>
  );
};
SignUp.defaultProps = {
  history: {}
};

SignUp.propTypes = {
  history: PropTypes.object.isRequired
};
export default SignUp;
