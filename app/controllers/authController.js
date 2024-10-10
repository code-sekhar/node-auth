const authModel = require('../models/authModel');
const jwt = require('jsonwebtoken');
const register= async(req,res)=>{
    const reqBody = req.body;
    try{
        const data = await authModel.create(reqBody);
        if(data){
            res.status(201).send({
                status: true,
                message: "User registered successfully"
            })
        }
    }catch(error){
        res.status(500).send({
            status: false,
            message: error.message
        })
    }
}
const login= async(req,res)=>{
    const {email, password} = req.body;
    try{
        const data = await authModel.find({email, password});
        if(data.length>0){
            let payload = {
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: data
            }
            let token = jwt.sign(payload, 'SecretKey1234');
            res.status(201).send({
                status: true,
                message: "User logged in successfully",
                data: token
            })
        }else{
            res.status(404).send({
                status: false,
                message: "User not found"
            })
        }
    }catch(error){
        res.status(500).send({
            status: false,
            message: error.message
        })
    }
};
exports.register = register
exports.login = login