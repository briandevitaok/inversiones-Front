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
    // window.location.replace('/panel')
    cookies.set("TOKEN", result.data.token, {
      path:"/panel"
    })
    window.location.replace('/panel')
  })
  .catch((error) => {
    console.log(error)
  });
}



// const configuration = {
//   method: 'post',
//   url: 'https://auth-backend.azurewebsites.net/login',
//   data: {
//     email,
//     password
//   },
// }

// axios(configuration)
// .then((result) => {
//   console.log(result)
//   setRegister(true)
//   login(email, password)
//   navigate('/panel', {
//     replace: true
//   })
// })
// .catch((error) => {
//   error = new Error();
//   console.log(error)
// });     