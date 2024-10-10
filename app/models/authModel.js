const mongoose = require('mongoose');
const authSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
});

const authModel =module.exports = mongoose.model('auth', authSchema);
module.exports = authModel;