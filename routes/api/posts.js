const express = require('express');
const auth = require('../../middleware/auth');
const router = express.Router();
const User = require('../../models/user')
const Post = require('../../models/post')
const Comment = require('../../models/comment')


router.post('/',auth,
async(req,res)=>{
    try{
        const user = await User.findOne({where:{user_id:req.user.id}})

        const newPost = new Post({
            text:req.body.text,
            name:user.name,
            user_id:user.user_id
            
        })
      

        const post = await newPost.save();
        res.json(post)
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error')
    }

})
router.get('/',auth,
async(req,res)=>{
    try {
        const posts = await Post.findAll();
        res.json(posts);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


router.get('/:id',auth,async(req,res)=>{
    try{
        const post = await Post.findOne({where:{post_id:req.params.id}})
        res.json(post);
    }catch(err){
        console.log(err.message);
        res.status(500).send('Server Error');
    }
})

router.post('/comment/:id',auth,async(req,res)=>{
    try{
        const user = await User.findOne({where:{user_id:req.user.id}})
        const post = await Post.findOne({where:{post_id:req.params.id}})

        // res.send(post)

        const newComment = await  new Comment({
            text:req.body.text,
            name:user.name,
            user_id:user.user_id,
            post_id:post.post_id
        })
        const comment = await newComment.save();
        res.json(comment);

    }catch(err){
        console.log('error in comment');
        res.status(500).send('server Error');

    }
})




module.exports = router;