const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    postfile:{
        type:String,
        required:true
    },
    likes:[{type:ObjectId,ref:"User", default: []} ],
    viewedBy:[{type:ObjectId,ref:"User", default: []} ],
    comments:[{
        text:String,
        postedBy:{type:ObjectId,ref:"User"},
        default : []
    }],
    postedBy:{
       type:ObjectId,
       ref:"User",
       required : true
    }
},{timestamps:true})

const Post = mongoose.model("Post",postSchema);

module.exports = Post;