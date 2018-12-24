const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    _id: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    title: {type: String, index: true },
    description: {type: String, index: true },
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

PostSchema.index({ title: "text", description: "text" })

module.exports = mongoose.model('Post', PostSchema);