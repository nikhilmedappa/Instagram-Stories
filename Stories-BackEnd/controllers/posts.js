const mongoose = require("mongoose");
const Post = require("../models/post");

module.exports.uploadProduct = async  (req, res) => {
    if(!req.body.title || !req.body.body) res.status(400).json({error : 'Invalid title or body'})
    let post =  new Post({
        title : req.body.title,
        body : req.body.body,
        postfile : req.file.path,
        postedBy : req.user._id
    }) 
    await post.save().then( (uploadedPost) =>{
            res.send(uploadedPost);
        }
    ).catch( (err) =>{
            res.status(500).send(err);
        }
    )  
}