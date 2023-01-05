import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./AuthReducer"




const init = () => {
    const user =  JSON.parse(localStorage.getItem('user'))
 
 
    return {
     logged: !!user, 
     user: user
    }
 }
 


export const AuthProvider = ({children}) => {

    const [state, dispacht] = useReducer(authReducer, {}, init)

    const login = (name = '') => {
        const action = {
            type: types.login,
            payload: name
        }
        console.log({name})

        localStorage.setItem('user', JSON.stringify(name))
        dispacht(action)
     }

     const logout = ()=>{

        localStorage.removeItem('user')
        const action = {
            type: types.logout
        }
        dispacht(action)
     }

  return (
    
    <AuthContext.Provider value={{
        ...state,
           login,
           logout 
    }}>

        { children }

    </AuthContext.Provider>


  )
}
