import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext'

export const PrivateRoutes = ({children}) => {

    const {logged} = useContext(AuthContext)
    console.log({logged})

    return (logged)
    ? children
    : <Navigate to='/auth/login'/>
}
