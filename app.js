const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const router = require('./router/api');
const mongoose = require('mongoose');
const app = new express();

app.use(cors());
app.use(bodyParser.json());

//MongoDB connection
const uri = 'mongodb://localhost:27017/node-auth';
const options = {
    user:'',
    pass:''
}
async function mongodb(){
    try{
        await mongoose.connect(uri, options);
        console.log('MongoDB connected');
    }catch(error){
        console.log(error);
    }
}
mongodb();

app.use('/api', router);
app.get('*', (req, res) => {
    res.status(404).send({
        message: "Page not found",
        status: false
    });
});
module.exports = app;