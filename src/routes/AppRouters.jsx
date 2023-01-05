import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { PanelPages } from '../panel/pages/PanelPages'
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
