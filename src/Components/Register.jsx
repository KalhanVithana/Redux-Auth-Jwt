// import React,{useState} from 'react'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
// import { LoginUser, SubmitData } from '../Action/action';
// import {useDispatch} from 'react-redux'
// export default function Register() {

//     const [name,setname]= useState();
//     const [email,setemail] = useState();
//     const [password,setpassword] = useState();




//     const dispatch = useDispatch();


//     const sumit = (e)=>{


//         e.preventDefault();

        

     
//         dispatch(LoginUser(email,password))

//         console.log("submit")


//     }


        
    

    
//     return (
//         <div>


//          <Form style= {{width:'60rem',paddingLeft:'30rem'}} onSubmit={sumit}>

//          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>name</Form.Label>
//             <Form.Control type="text" value={name} onChange={(e)=>{

//                 setname(e.target.value)
//                 console.log(e.target.value)
//             }} placeholder="Enter name" />
            
//         </Form.Group> */}
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="text" value={email} onChange={(e)=>{

//                         setemail(e.target.value)
//                         console.log(e.target.value)
//             }
              
//             } placeholder="Enter email" />
//             <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//             </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" value={password} onChange={(e)=>{

//                 setpassword(e.target.value)
//                 console.log(e.target.value)
//             }} placeholder="Password" />
//         </Form.Group>
       
//         <Button variant="primary" type="submit">
//             Submit
//         </Button>
//         </Form>
//         </div>
//     )
// }
