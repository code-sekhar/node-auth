const jwt = require('jsonwebtoken');
exports.tokenVerifymiddlewares = (req, res, next) => {
    let token = req.headers['token-key'];
   try{
    if(!token){
        return res.status(401).send({
            status: false,
            message: "token not found"
        })
    }
    jwt.verify(token, 'SecretKey1234', (err, data) => {
        if(err){
            res.status(401).send({
                status: false,
                message: "Unauthorized"
            });
        }else{
            next();
        }
    })   
   }catch(error){
    res.status(401).send({
        status: false,
        message: "Unauthorized"
    });
   }
}