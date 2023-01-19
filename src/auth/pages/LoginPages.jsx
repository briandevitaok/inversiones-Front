import { useContext, useState } from 'react';
import swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';
import { fetchAxios } from '../../helpers/axios';
import { AuthLayout } from '../layout/AuthLayout';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';

export const LoginPages = () => {
  const {login} = useContext(AuthContext);
  const [register, setRegister] = useState(true)
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');


  const inputName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const inputEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const inputPassword = (e) => {
    const password = e.target.value;

    setPassword(password);
  };

  const onLogin = async (e) => {
    e.preventDefault();
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
      fetchAxios(email, password, name)
      setRegister(false)
      login(email, name, password)
      
    }
   ;
  };


  return (
    <>

<AuthLayout title="Login">
      <form onSubmit={onLogin} >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="example@gmail.com"
              fullWidth
              name='email'
              onChange={inputEmail}
             
              
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Name"
              type="name"
              placeholder="Name"
              fullWidth
              name='name'
              onChange={inputName}
            />
          </Grid>


          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              name='password'
              onChange={inputPassword}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12}>
              <Button 
              type='submit' 
              variant="contained" 
              fullWidth
              >
                Login
              </Button>
            </Grid>
            </Grid>
         
        </Grid>
        {
          !register ? <span className='text-danger'>Credenciales incorrectas</span>: null

        }
       
      </form>
    </AuthLayout>






      {/* <div className="container mt-5 text-center">
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
       
       
        <br />
        <button className="btn btn-primary" onClick={onLogin}>
          Iniciar Sesion
        </button>
      </div> */}
    </>
  );
};
