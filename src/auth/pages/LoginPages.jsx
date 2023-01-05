
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';

export const LoginPages = () => {

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

    const inputUser = (e) => {
        const user = e.target.value
        setUser(user)
    }
    const inputPassword = (e) => {
        const password = e.target.value
  
        setPassword(password)
    }

    const onLogin = () =>{
        if (user <1) {
          return    new swal({icon: 'error', text:'Debes poner un usuario correcto', title: 'Ops'});
        } else if (password <1) {
          return  new swal({icon: 'error', text:'El passsword debe ser correcto', title: 'Ops'});
        }
        login(user)
        navigate('/panel', {
            replace: true
        })
    }
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
        <button
        className='btn btn-primary'
        onClick={onLogin}
        >
        Iniciar Sesion

        </button>
      </div>
    </>
  );
};
