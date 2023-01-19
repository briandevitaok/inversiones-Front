
export const getUsers = async () => {
   
          const response = await fetch('http://localhost:3000/users');
          let data = await response.json();
          let user = data.response
        return user
}

//Esta como nota

