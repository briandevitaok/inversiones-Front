
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { Home } from '../panel/components/Home'
import { PanelRoutes } from '../panel/routes/PanelRoutes'
import { PrivateRoutes } from './PrivateRoutes'


export const AppRouters = () => {
  return (
    <>
    <Routes>
            <Route
            path='/auth/*'
            element={
            <AuthRoutes/>
          }
            >
            </Route>

            <Route
            path='/home'
            element={
              <Home/>
            }
            >

            </Route>

          <Route
          path='/*'
          element={
            <PrivateRoutes>
             <PanelRoutes/>
            </PrivateRoutes>
          }
          >
           
          </Route>

            

    </Routes>
    
    </>
  )
}
