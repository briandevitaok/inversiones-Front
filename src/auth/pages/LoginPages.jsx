import { useContext, useState } from 'react';
import swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';
import { fetchAxios } from '../../helpers/axios';

export const LoginPages = () => {
  const {login} = useContext(AuthContext);
  const [register, setRegister] = useState(true)
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');





  const inputEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const inputPassword = (e) => {
    const password = e.target.value;

    setPassword(password);
  };

  const onLogin = async () => {
    if (email < 1) {
      return new swal({
        icon: 'error',
        text: 'El email debe ser correcto',
        title: 'Ops',
      });
    }

    else if (password < 1) {
      return new swal({
        icon: 'error',
        text: 'El password debe ser correcto',
        title: 'Ops',
      });
    } 
    else{
      const p = fetchAxios(email, password)
      console.log(p);
      login(email, password)
      setRegister(false)
    }
   ;
  };


  return (
    <>
      <div className="container mt-5 text-center">
        <h1>Login</h1>
        <hr />
        <form >
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            onChange={inputEmail}
          />
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={inputPassword}
          />
        </form>
        {
          !register ? <span>Credenciales incorrectas</span>: null
        }
       
        <br />
        <button className="btn btn-primary" onClick={onLogin}>
          Iniciar Sesion
        </button>
      </div>
    </>
  );
};
