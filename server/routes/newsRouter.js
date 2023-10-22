const express = require('express');
const router = express.Router();
const News = require('../models/news.js');





router.post('/post',async (req,res)=>{
    try {
        const news = await News(req.body)
        news.save();
        res.status(201).send({data:'news added successfully'})
    } catch (error) {
        res.status(500).send({message:'internal server error'})
    }
})




router.get('/news',async (req,res) =>{
    try {
        const news = await News.find();
        res.status(200).send({data:news})
    } catch (error) {
        res.status(500).send({message:'internal server error'})
    }
})

router.get('/details/:id',async (req,res)=>{
    try{
        const details  = await News.findById(req.params.id);
        res.status(200).send(details);
        
    }
    catch(err){
        console.log(err)
    }
})

router.delete('/deletePost/:id',async(req,res)=>{
    try {
        const deleteNews = await News.findByIdAndDelete(req.params.id)
        if(deleteNews){
            res.status(200).send({message:'deleted successfully'})
        }
        else{
            console.log(error)
        }
    } catch (error) {
        console.log(error)
    }
})





module.exports = router;
