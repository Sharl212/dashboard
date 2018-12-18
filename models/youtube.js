var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var YoutubeSchema = new Schema({
    _id: String,
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