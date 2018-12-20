const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const moment = require("moment");

// * schema
const PostSchema = require("../models/post");

const fetchPosts = () => {
    return PostSchema.find().sort({ number: 1}).then(res => res).catch(err =>err)
}

const getPost = (id) => {
    return PostSchema.findById(id).then(res => res).catch(err =>err)
}

const editPost = (id, body) => {
    const swapUrl = body.url.replace("watch?v=", "embed/");

    return PostSchema.findByIdAndUpdate(id, {
        "title":body.title,
        "description":body.description,
        "url": swapUrl,
        "number": body.number,
        "createdAt": moment().format('LLLL')

    }).then(res => res).catch(err =>err)
}

const deletePost = (id) => {
    return PostSchema.findByIdAndRemove(id)
    .then(deleted => deleted)
    .catch(e => e)
}

const addPost = (body) =>{
    let result;
    const swapUrl = body.url.replace("watch?v=", "embed/");

    const newPost = new PostSchema({
        "_id": new ObjectId(),
        "title":body.title,
        "description":body.description,
        "url": swapUrl,
        "number": body.number,
        "createdAt": moment().format('LLLL')
    });

    try{
        result = newPost.save();
    } catch(e) {
        result = e;
    }

    return result;
}

module.exports = {fetchPosts, getPost, editPost, addPost, deletePost };