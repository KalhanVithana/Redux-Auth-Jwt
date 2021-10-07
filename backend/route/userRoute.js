express = require('express'),
router = express.Router();
const User = require('../model/User');
let UserSchema = require('../model/User')
 const jwt = require('jsonwebtoken')

 const auth = require('../middleware/auth');
const json = require('body-parser/lib/types/json');

router.route('/register').post(async(req,res)=>{

    const {name,email,password} = req.body



     

    const UserData = new UserSchema({

      name,
      email,
      password,
      

    })

    


   const NewUser =  await UserData.save();

   res.json(NewUser)
   console.log(NewUser)



})
  


router.route('/login').post(async(req,res)=>{



  const {email,password} = req.body


  

    const user = await UserSchema.findOne({email:email})

    if(!user){

      res.status(401).json('user not register ')
    }


    const token = jwt.sign({user:user.id},process.env.JWT)


    res.json({
      token,
      user:{
        id:user._id
      }


    })









})


router.route('/delete').delete(auth,async(req,res)=>{

  const deleteUser = await UserSchema.findByIdAndDelete(req.user)

  res.json(deleteUser)
})
  

router.route('/token').post(async(req,res)=>{

  const token = req.header("x-auth")

      if(!token){

        return res.json(false);
      }


      const verify = jwt.verify(token,process.env.JWT);

      if(!verify){

        return res.json(false);
      }

      const user = await UserSchema.findById(verify.user)

      console.log(user)
      
      if(!user){

        return res.json(false);
      }

      return res.json(true);



})

router.route('/').get((req, res) => {
  UserSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})



router.route('/get').get(auth,async(req,res)=>{


 const User = await UserSchema.findById(req.user)

 console.log(User)
 res.json(User)
})

  
module.exports = router;
