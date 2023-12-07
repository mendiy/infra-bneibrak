import axios from "axios";

const checkToken = async () => {
  try{
  const token = localStorage.getItem('authToken')

      const response = await axios.get(`https://vercel.com/mendiys-projects/mendi-test/GUDsrQx58eY4L7Kkg4aqd8JLF6NH/api/users/verifyToken`, {
        headers: {
          authorization: token,
        },
      });
      return response.status
     
    } catch (error) {
   
      console.error("Token validation failed:", error);
      return error.response.status
    }
  

};

export default checkToken;
