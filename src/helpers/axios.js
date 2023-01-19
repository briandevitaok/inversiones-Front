import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export const fetchAxios = (email, password, name) => {
  const configuration = {
    method: 'post',
    url: 'We couldn’t deploy your site. Check out our Build docs for tips on troubleshooting your build, and if that doesn’t help, please review our Support Guide on extended debugging before asking us for debugging advice.',
    data: {
      email,
      password,
      name,
    },
  };

 return  axios(configuration)
    .then((result) => {
      if (result.status === 200) {
        cookies.set('TOKEN', result.data.token, {
          path: '/panel',
        });

        // window.location.replace('/panel');
      } else {
        error.message({
          error: 'error',
        });
      }
      return result.data.message
    })
    .catch((error) => {
      return error.response.data.message
    });
};
