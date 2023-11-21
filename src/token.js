import axios from "axios";


// const token = 'eyJhbGciOiJIUzI1NiJ9.aGhAampqampqampqampqampqamouY29t.UlR8638RE8BEet0A-gXX4CjFi95x4-1ENnOmvvk1L8g';

const tokenIsCorrect = async () => {
   
    
    try{
      const token = localStorage.getItem('authToken');
        console.log(token)
        if(!token) console.log('not token')
    //     const response = await axios.get('http://localhost:5000/validate-token', {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });

    //   console.log(response)
        // return true;
        return false

    }catch (error){
        console.log(error)
        return false;
    }
}
// tokenIsCorrect()

export default tokenIsCorrect;