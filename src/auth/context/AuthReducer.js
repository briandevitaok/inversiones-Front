import { types } from "../types/types";


export const authReducer = (state = {}, action) => {
  

  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        name: action.payload,
        email: action.payload,
        password: action.payload
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
  
};
