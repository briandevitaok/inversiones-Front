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
  
  axios(configuration)
  .then((data) => { 
    console.log(data)
    localStorage.setItem('message', data.data.message)
    localStorage.setItem('status', data.status)
    
    
  })
  .catch((error) => {
     console.log(error)
  });
}

