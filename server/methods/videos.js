const YoutubeSchema = require("../models/youtube");

const fetchVideos = () => {
    return YoutubeSchema.find({}).then(res => res).catch(err =>err)
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

module.exports = {fetchVideos, getVideo, editVideo };