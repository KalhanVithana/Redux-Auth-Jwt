import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { LoadUserList } from '../Action/action';
import { LoadUser } from '../Reducer/Reducer';


export default function UserList() {

    const data = useSelector(state => state.LoadUser)
   
    console.log(data)
     const dispatch = useDispatch();

     

  
    useEffect(()=>{

        dispatch(LoadUserList())
    })

    return (
        <div>
        
        </div>
    )
}
