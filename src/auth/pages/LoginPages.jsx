import { useContext, useState } from 'react';
import swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';
import { fetchAxios } from '../../helpers/axios';
import { AuthLayout } from '../layout/AuthLayout';
import { Button, Grid, TextField} from '@mui/material';
import { useForms } from '../../hooks/useForm';
import { Link, useNavigate } from 'react-router-dom';

export const LoginPages = () => {
  const {login} = useContext(AuthContext);
  const navigate = useNavigate()
  const {formState, onInputChange} = useForms({
   email: '',
   name: '',
   password: '',
 })

 const {email, name, password } = formState;
 const [message, setMessage] = useState()

 
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
    const data = await fetchAxios(email, password, name)
    setMessage(data)
    login(email, name, password)
    navigate('/panel', {
      replace:true
    })
      
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
              onChange={onInputChange}
             
              
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Name"
              type="name"
              placeholder="Name"
              fullWidth
              name='name'
              onChange={onInputChange}
            />
          </Grid>


          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              name='password'
              onChange={onInputChange}
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
            {/* <Link  to="/auth/register">
              Crear una cuenta
            </Link> */}
            </Grid>
         
        </Grid>
        <span className='text-danger'>{message}</span>
       
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
