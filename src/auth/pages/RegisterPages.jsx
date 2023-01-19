import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useForms } from '../../hooks/useForm'
import { fetchAxios } from '../helpers/axios'
import { AuthLayout } from '../layout/AuthLayout'




export const RegisterPages = () => {

    const [message, setMessage] = useState(false)

    const { formState, onInputChange, onResetInput} = useForms({
      email: '',
      name: '',
      password: '',

    })

    const {email, name, password} = formState;

    
    const onLogin = (e) => {
        e.preventDefault()
        fetchAxios(email, name, password)
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
              value={name}
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
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12}>
              <Button 
              type='submit' 
              variant="contained" 
              fullWidth
              onClick={onResetInput}
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
