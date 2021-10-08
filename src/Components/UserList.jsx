import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { LoadUserList } from '../Action/action';
import { LoadUser } from '../Reducer/Reducer';
import axios from 'axios';


export default function UserList() {

    const data = useSelector((state) => state.LoadUser.userdata)
    const [user,setuser] = useState([])

    
  

console.log(data)
     const dispatch = useDispatch();

     

  
    useEffect(async()=>{

        dispatch(LoadUserList())
       



    },[dispatch])

    return (
        <div>
            {
                data.map((user)=>{
                    return <li>{user.name}</li>
                })
            }
        </div>
    )
}
