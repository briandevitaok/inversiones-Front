import axios from 'axios'



export const fetchAxios = (email, name, password) => {

  const configuration = {
    method: 'post',
    url: 'https://auth-backend.azurewebsites.net/register',
    data: {
      email,
      name,
      password,
    },
  }



  
   return axios(configuration)
  .then((data) => { 
 
    
    
   return data.data.message
    
  })
  .catch((error) => {
     return error.response.data.message
  });
}

