const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    timePosted: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = Article = mongoose.model('articles', ArticleSchema);