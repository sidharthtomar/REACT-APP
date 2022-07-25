const express = require('express')
const passport = require('passport')
const googleStrategy = require('passport-google-oauth20')
const router = express.Router();
const config = require('config')


passport.use(new googleStrategy({
    clientID:"24353066560-om9kg2sfkr1kh8u3rgtb1sdst6a3km8q.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL:"api/gauth/google"
},(accessToken,refreshToken,profile,done)=>{
    console.log(accessToken)
    console.log(profile)
    


}))
router.get('/',passport.authenticate("google",{
    scope:["profile",'email']


}))
router.get("/google",passport.authenticate("google"))

module.exports=router;
