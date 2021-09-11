const { default: userEvent } = require('@testing-library/user-event');
const  jwt = require('jsonwebtoken');


const auth = (req,res,next)=>{



        const token = req.header("x-auth")

    if(!token){

        res.status(401).json({msg:"no authentication"})
    }


    console.log(token)

    const verified =  jwt.verify(token,process.env.JWT);


    if(!verified){

        res.status(401).json({msg:"no verified"})
    }

    console.log(verified);

    req.user = verified.user;

        next();


}

module.exports = auth;