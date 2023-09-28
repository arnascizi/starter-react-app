const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const AlbumSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    band: {
        type: String,
        required: true,
    },
    song: {
        type: String ,
        required: true,
    },
    trackLength: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Album', AlbumSchema);