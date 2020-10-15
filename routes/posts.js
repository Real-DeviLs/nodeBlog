const express=require('express');
const { updateOne } = require('../models/Post');

const router =express.Router()

const Post = require('../models/Post')

router.get('/', async(req,res)=>{
 try{
     const posts = await Post.find();
     res.send(posts);
 }
 catch{
    err => 
    res.json(err)
 }
})

router.get('/:postId', async(req,res) => {
    try{const Post = await Post.findById(req.params.postId);
    res.send(Post)
    }
    catch{
        err =>
        res.json(err)
    }
})

router.delete('./:postId',async(req,res) =>{
   try{
       const removePost = await Post.remove({_id: req.params.postId})
   }
   catch(err){
        res.json({message: err});
   }
})

router.patch('./:postId',async(req,res)=>{
    try{
        const updatePost = await Post.updateOne({_id: req.params.postId},
        { $set: {
            title: req.body.title,
            description: req.body.description}

        })

    }
    catch (err){ res.json({message: err})} 
})
router.post('/',async (req,res) => {
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    })
    try{
    const savePost=await post.save();
        res.send(data+" added");
    }
    catch{err => 
        res.json(err)
    }
    

});

module.exports =router