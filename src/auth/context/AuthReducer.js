import { types } from "../types/types";


export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
        email: action.payload,
        passwords: action.payload
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
  
};
