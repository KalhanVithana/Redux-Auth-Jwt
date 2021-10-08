import { Load_Register, Sucess_login, Sucess_Register,Load_login, Sucess_userData, Load_userData } from "../Constants/constant";


export  const RegisterUser = (state = {user:[]},action)=>{


    switch (action.type) {
        case Load_Register:
            return {
                loading:true
            }

        case Sucess_Register:
            return {
                loading:false,
                user:action.payload
            }
            
            
    
        default:
            return state;
    }

}


 export const loginRes = (state = {},action) =>{


    switch (action.type) {
        case Load_login:
            return{ loading:true}
            
            case Sucess_login:
            return{ loading:false,
                    userlogin:action.payload
                }
    
    
        default:
            return state;
    }



 }

const initialstate ={

    userdata:[],
    loading:false,
}


 export const LoadUser =(state= initialstate,action)=>{

    switch (action.type) {
        case Load_userData:
            return{ 
                ...state,
                loading:true}
            
            case Sucess_userData:
            return{ 
                ...state,
                loading:false,
                userdata:action.payload
                }
    
    
        default:
            return state;
    }

 }


 