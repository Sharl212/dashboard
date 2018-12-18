const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const YoutubeSchema = new Schema({
    _id: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    url: String,
    description: String
});

YoutubeSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id
    }
});

module.exports = mongoose.model('Youtube', YoutubeSchema);