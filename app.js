
const express  = require('express')
const sequelize = require('./config/database')
const passport = require('passport')
const googleStrategy = require('passport-google-oauth20')


const app = express();
const port = 5000;

// @Database Connection  and table creation

const User = require('./models/user')
const Comment = require('./models/comment')
const Post = require('./models/post')
// User.hasMany(Post)
// User.hasMany(Comment)
// Post.hasMany(Comment)


sequelize.sync()

//init middleware
app.use(express.json({extended:false}))
app.get('/',(req,res)=>{
    return res.send('API Running')
})

//Defining Routes

app.use('/api/users',require('./routes/api/users'))
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/posts',require('./routes/api/posts'))
app.use('/api/gauth',require('./routes/api/gauth'))


//1 to many relations

// User.hasMany(Comment,{
//     foreignKey:'user_id',
//     as:'comment'
// })
// Comment.belongsTo(User,{
//     foreignKey:'user_id',
//     as:'user'

// })


app.listen(port,()=>{
    try{
        console.log('Server up and running')
    }
    catch(err){
        console.log(err)
    }
})
