const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const YoutubeSchema = require("../models/youtube");

const fetchVideos = () => {
    return YoutubeSchema.find().then(res => res).catch(err =>err)
}

const getVideo = (id) => {
    return YoutubeSchema.findById(id).then(res => res).catch(err =>err)
}

const editVideo = (id, body) => {
    return YoutubeSchema.findByIdAndUpdate(id, {
        "description":body.description,
        "url": body.url
    }).then(res => res).catch(err =>err)
}

const deleteVideo = (id) => {
    return YoutubeSchema.findByIdAndRemove(id)
    .then(deleted => deleted)
    .catch(e => e)
}

const addVideo = (body) =>{
    let result;
    const newVideo = new YoutubeSchema({
        "_id": new ObjectId(),
        "description": body.description,
        "url": body.url
    });

    try{
        result = newVideo.save();
    } catch(e) {
        result = e;
    }

    return result;
}

module.exports = {fetchVideos, getVideo, editVideo, addVideo, deleteVideo };