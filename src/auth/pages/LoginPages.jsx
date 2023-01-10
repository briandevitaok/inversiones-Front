import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
import { useForms } from '../../hooks/useForm';
import { AuthContext } from '../context/AuthContext';

export const LoginPages = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');





  const inputEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const inputUser = (e) => {
    const name = e.target.value;
    setUser(name);
  };
  const inputPassword = (e) => {
    const password = e.target.value;

    setPassword(password);
  };

  const onLogin = async () => {
    if (name < 1) {
      return new swal({
        icon: 'error',
        text: 'Debes poner un nombre correcto',
        title: 'Ops',
      });
    } 
    else if (email < 1) {
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
      login(name, email, password);
    try {
        let config = {
          method:'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }
          
    
          )
        }
      let res = await fetch('http://localhost:3000/api/v1/users', config)
    } catch (error) {
      console.log(error);
    }
    }
    
    
    
    navigate('/panel', {
      replace: true,
    });
  };


  return (
    <>
      <div className="container mt-5">
        <h1>Login</h1>
        <hr />
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={inputEmail}
          />
          <br />
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={inputUser}
          />
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={inputPassword}
          />
        </form>
        <br />
        <button className="btn btn-primary" onClick={onLogin}>
          Iniciar Sesion
        </button>
      </div>
    </>
  );
};
