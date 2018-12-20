const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    _id: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    title: String,
    description: String,
    url: String,
    number: Number,
    createdAt: String
});

PostSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id
    }
});

module.exports = mongoose.model('Post', PostSchema);