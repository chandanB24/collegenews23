const express = require('express');
const router = express.Router();
const Admin = require('../models/admin.js');



router.post('/admin',async (req,res)=>{
    try {
        const adminDetails =await Admin.find()
        const username = req.body.username
        const password = req.body.password
        if(adminDetails[0].username === username && adminDetails[0].password === password ){
        res.status(201).send({data:'user logged in successfully'})
        }
        else{
            res.status(500).send({error:'invalid credentials'})
        }
    } catch (error) {
        console.log(error)
    }
})



module.exports = router;