const profileModel = require('../models/profileModel');
const addBlog = async (req, res) => {
    try {
        const reqBody = req.body;
        const data = await profileModel.create(reqBody);
        if(data){
            res.status(201).send({
                status: true,
                message: "Blog added successfully"
            }) 
        }
    } catch (error) {
        res.status(500).send({
            status: false,
            message: error.message
        })
    }
}
const getBlog = async(req,res)=>{
    try{
        const data = await profileModel.find();
        if(data){
            res.status(201).send({
                status: true,
                message: "Blog fetched successfully",
                data: data
            });
        } 
    }catch(error){
        res.status(500).send({
            status: false,
            message: error.message
        })
    }
}
const updateBlog = async(req,res)=>{
    const reqBody = req.body;
    const id = req.params.id;
    const blogId = {_id: id};
    try{
        const updateBlog = await profileModel.updateOne(blogId,reqBody);
        const queryCheck = await profileModel.findById(id);
        if(!queryCheck){
            res.status(404).send({
                status: false,
                message: "Blog not found"
            })
        }
        res.status(201).send({
            status: true,
            message: "Blog updated successfully",
            data: updateBlog
        });
    }catch(error){
        res.status(500).send({
            status: false,
            message: error.message
        })
    }
}
const getSingleBlog = async(req,res)=>{
    const id = req.params.id;
    const singleBlogId = {_id: id};
    try{
        const queryCheck = await profileModel.findById(id);
        if(!queryCheck){
            res.status(404).send({
                status: false,
                message: "Blog not found"
            })
        }else{
            const singleData = await profileModel.findById(singleBlogId);
            res.status(201).send({
                status: true,
                message: "Blog fetched successfully",
                data: singleData
            })
        }
    }catch(error){
        res.status(500).send({
            status: false,
            message: error.message
        })
    }
}
const deleteBlog = async(req,res)=>{
    const id = req.params.id;
    const blogId = {_id: id};
    
    try{
        const queryCheck = await profileModel.findById(id);
        if(!queryCheck){
            res.status(404).send({
                status: false,
                message: "Blog not found"
            })
        }else{
            const deleteBlog = await profileModel.deleteOne(blogId);
            res.status(201).send({
                status: true,
                message: "Blog deleted successfully",
                data: deleteBlog
            })
        }
    }catch(error){
        if(!res.headersSent){
            res.status(500).send({
                status: false,
                message: error.message
            })
        }
    }
}
exports.addBlog = addBlog;
exports.getBlog = getBlog;
exports.updateBlog = updateBlog;
exports.deleteBlog = deleteBlog;
exports.getSingleBlog = getSingleBlog;