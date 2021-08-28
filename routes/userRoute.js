const { Router } = require('express');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/userModel');


router.post('/register', (req, res, next)=>{
    User.find({email : req.body.email}, (error, docs) => {
        if(docs.length > 0){
            res.send("Email already registered.")
        }else{
            const newUser = new User(req.body);
            newUser.save(error => {
            if(error){
                res.send('Something went wrong');            
            }else{
                res.send('User reg success');
            }
    })
        }
    })
})

router.post('/login', (req, res, next)=>{
    User.find(req.body, (error, docs) => {
        if(!error && docs.length > 0){
            res.send({name : docs[0].name, email : docs[0].email, _id : docs[0]._id});
        }else{
            res.status(400).json("Login Unsuccessful!")
        }
    })
})

router.post('/update', (req, res) => {
    const {userid, name, email, password} = req.body;
    User.findByIdAndUpdate({_id : userid}, {_id : userid, name, email, password}, (error, docs) => {
        if(error){
            res.send('Something went wrong');            
        }else{
            res.send('User updated success');
        }
    })
});

router.get('/getallusers', (req, res) => {
    User.find({}, (error, docs) => {
        if(error){
            res.status(400).json({message:"something went wrong"});
        }else{
            res.send(docs);
        }
    })
})

router.post('/deleteuser', (req, res) => {
    User.findByIdAndDelete({_id : req.body.id}, (error, docs) => {
        if(error){
            res.status(400).json({message:"something went wrong"});
        }else{
            res.send(docs);
        }
    })
})

module.exports = router;