const express = require('express')
const Sequelize = require('sequelize');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const config = require('config')
const auth = require('../../middleware/auth')
const { v4: uuidv4 } = require('uuid');
uuidv4();

router.get('/',auth,async(req,res)=>{
//    console.log("inside token")
//    return res.send("inside token")})
try{
    const user = await User.findOne({where:{user_id:req.user.id}})
    res.json(user);
}catch(err){
    console.log(err)

}

})
   
router.post('/',async(req,res)=>{

    //taking input from user 

    const {email,password} = req.body;

    //if the user exist or not
    try{
        let user = await User.findOne({where:{email}})

        if(!user){
            res.status(400)
            .json({errors:[{msg:'Invalid credential'}]})
            
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res
           .status(400)
           .json({ errors:[{msg: 'Invalid credential' }]})

        }

       

        //creating new user
        else{
            
        //return jsonwebtoken

        const payload = {
            user:{
                id:user.user_id
            }
        }
        console.log("payload is ",payload)
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




module.exports = router