import axios from 'axios';

export const addStorage= async ()=>{
    try{
        const {data} =await axios.get('http://localhost:3000/');
        console.log(data)
        return data;
   }
    catch(error)
    {
        throw error;

    }

}