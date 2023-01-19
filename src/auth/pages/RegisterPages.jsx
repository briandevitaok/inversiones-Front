import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useForms } from '../../hooks/useForm'
import { fetchAxios } from '../helpers/axios'
import { AuthLayout } from '../layout/AuthLayout'




export const RegisterPages = () => {


    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState(false)

    


    const inputName = (e) => {
        setName(e.target.value);
      };
    
      const inputEmail = (e) => {
        setEmail(e.target.value)
      };
    
      const inputPassword = (e) => {
        setPassword(e.target.value);
      };
    
    const onLogin = (e) => {
        e.preventDefault()
        fetchAxios(email, name, password)
        setEmail('')
        setName('')
        setPassword('')
        const status = localStorage.getItem('status')
        if (status == 201) {
          setMessage(true) 
          
        } else {
          setMessage(false)
        }
           
    }




  return (
    <>
    <AuthLayout  title="Reistro">
      <form onSubmit={onLogin} >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="example@gmail.com"
              fullWidth
              name='email'
              value={email}
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
              value={name}
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
              value={password}
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
                Crear cuenta
              </Button>
              <span className='text-success text-center'>{
              message ? <span>Usuario creado</span> : 
              null}</span>
            </Grid>
            </Grid>
         
        </Grid>

      </form>
    </AuthLayout>
    
    </>
  )
}
