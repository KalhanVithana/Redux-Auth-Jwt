import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { LoginUser } from '../Action/action';
import {useDispatch,useSelector} from 'react-redux'
import '../form.css'
export default function UserLogin() {

    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();




    const dispatch = useDispatch();


    const submit = (e)=>{


      try{
        e.preventDefault();




        dispatch(LoginUser(email,password))

        alert('login sucessfull')

      }
      catch(e){
          console.log(e)
      }


    }






    return (
        <div>


            <div classNameName="container">


                <div className="card form" style={{ width: "50rem", marginLeft: "20rem", marginTop: "10rem" }}>
                    <h1>Login</h1>
                    <div className="card-body">
                        <form onSubmit={submit}>
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

        </div>
    )
}
