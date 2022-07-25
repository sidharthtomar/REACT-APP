const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const config = require('config')
const { v4: uuidv4 } = require('uuid');
uuidv4();




// router.get('/',(req,res)=>{
//     return res.send('User route running')
// })


router.post('/',async(req,res)=>{

    //taking input from user 

    const {name,email,password} = req.body;

    //if the user exist or not
    try{
        let user = await User.findOne({where:{email}})

        if(user){
            res.status(400)
            .json({errors:[{msg:'User already exists'}]})
            
        }

       

        //creating new user
       else{
           
        

        user = new User({
           
            name,
            email,
            password
        })
        

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt)


        await user.save();
        console.log(user)

        //return jsonwebtoken

        const payload = {
            user:{
                id:user.user_id
            }
        }
        jwt.sign(payload,
            config.get('jwtSecret'),
            {expiresIn:36000},
            (err,token)=>{
                if(err){
                    throw err;}
                    res.json({token})
                
            })
    
    
    
    }

    }catch(err){
        console.log('Error',err)

    }

})

module.exports = router;