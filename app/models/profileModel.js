const mongoose = require('mongoose');
const profileSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    short_description:{
        type: String,
        required: true
    },
    long_description:{
        type: String,
        required: true
    },
    blog_image:{
        type: String,
        required: true
    }
});

const profileModel =module.exports = mongoose.model('profile', profileSchema);
module.exports = profileModel;