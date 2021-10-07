import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
// import axios from 'axios'
// import {useDispatch,useSelector} from 'react-redux'
// import { GetUsers, Register } from '../Action/Action.type';
// import { LoadItems } from '../Redux/action/Action';
import '../form.css'
import { SubmitData } from '../Action/action';

export default function RegisterUser() {

    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    //     const data = useSelector((state) => state.GetUsers)

    //     const Items =useSelector((state)=>state.GetRegisterData)

    //     const {user} =data;

    //     const {items} =Items;

    //     const [u,setu]=useState([]);








    // console.log(items);



    const dispatch = useDispatch();


       const submit= async(e)=>{
            e.preventDefault();

            dispatch(SubmitData(name,email,password));

            alert('sucessfull')

        }

    //     useEffect(async() => {

    //         dispatch(GetUsers());

    //         // const data = await axios.get('http://localhost:4000/user/get').then(res=>{

    //         // console.log(res.data)
    //         // setu(res.data)
    //         // })

    //         dispatch(LoadItems())




    //     }, [dispatch])


    return (


        <div classNameName="container">


            <div className="card form" style={{ width: "50rem", marginLeft: "20rem", marginTop: "10rem" }}>
            <h1>Register</h1>
                <div className="card-body">
                    <form onSubmit={submit}>
                        <div className="form-group">
                            <label className="frmlable">name</label>
                            <input type='text' value={name} onChange={(e) => {
                                setname(e.target.value)
                            }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label className="frmlable">email</label>
                            <input type='text' value={email} onChange={e => {
                                setemail(e.target.value)
                            }} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label className="frmlable">Password</label>
                            <input type='text' value={password} onChange={e => {
                                setpassword(e.target.value)
                            }} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ marginTop: "2rem" }}>Submit</button>
                    </form>
                </div>
            </div>

            {/* {
          
          
         
          items?.map((res,i)=>{
 
             return<table>
             <tr>
               <th>Company</th>
              
             </tr>
             <tr>
               <td>{res.name}</td>
               
             </tr>

             <Link to={`/edit/${res._id}`}>edit</Link>
             
            
           </table>

             
                    
                   
           })
       } */}
        </div>


    )
}
