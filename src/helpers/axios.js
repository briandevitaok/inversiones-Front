import axios from 'axios'
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const fetchAxios = (email, password) => {

  const configuration = {
    method: 'post',
    url: 'https://auth-backend.azurewebsites.net/login',
    data: {
      email,
      password
    },
  }
  
  axios(configuration)
  .then((result) => {  
    if (result.status === 200) {
      cookies.set("TOKEN", result.data.token, {
        path:"/panel"
      })
      
      window.location.replace('/panel')
    } else {
      error.message({
        error: 'error'
      })
    }
    
  })
  .catch((error) => {
     console.log(error)
  });
}

