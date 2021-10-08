import axios from "axios"
import { Load_login, Load_Register, Load_userData, Sucess_login, Sucess_Register, Sucess_userData } from "../Constants/constant"

export const SubmitData = (name,email,password)=>async(dispatch)=>{


    
    try{

        
    dispatch({type:Load_Register})


    const formdata = {

        name,email,password
    }


   const data = await axios.post('http://localhost:4000/user/Register',formdata)


    dispatch({type:Sucess_Register,payload:data})
  
    }

    catch(e){

        console.log(e)
    }

}

export const LoginUser = (email,password) =>async(dispatch)=>{

    dispatch({type:Load_login})


    const formdata = {
        email,
        password
    }

    const data = await axios.post('http://localhost:4000/user/login',formdata);

 

    dispatch({type:Sucess_login,payload:data});


    localStorage.setItem("x-auth",data.data.token);

}




export const LoadUserList =()=>async(dispatch)=>{


    try{
      
   
        dispatch({type:Load_userData})
      
       const data =  await axios.get('http://localhost:4000/user/');
   
   
       dispatch({type:Sucess_userData,payload:data.data})
       console.log(data)
    
    
    }
    catch(e){
   
   
       console.log(e)
    }
   
   
   
   }