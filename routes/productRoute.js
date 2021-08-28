const express = require('express');
const router = express.Router();

const Product = require('../models/ProductModel');

router.get('/getallproducts', (req, res)=>{
    Product.find({}, (error, docs)=>{
        if(!error){
            res.send(docs);
        }else {
            res.status(400).json({message : "Something went wrong!!"})
        }
    })
})

router.post('/getproductbyid', (req, res)=>{
    Product.find({_id : req.body.productID}, (error, doc)=>{
        if(!error){
            res.send(doc && doc[0] ? doc[0] : {})
        }else{
            res.status(400).json({message : "Something went wrong!!"});
        }
    })
});

router.post('/addProductReview', async (req, res, next) => {
    const {currentUser, productid, review} = req.body;
    const product = await Product.findById({_id : productid});
    const reviewModel = {
        name : currentUser.name,
        userid : currentUser._id,
        rating : review.rating,
        comment : review.comment
    };
    if(product){
        product.reviews.push(reviewModel);
        if(product.reviews.length){
            let avgRating = product.reviews.reduce((acc, item) => acc + item.rating, 0) / product.reviews.length;
            product.rating = avgRating;
        }
        product.save(error => {
            if(error){
                res.status(400).json({message : "Something went wrong"});
            }else{
                res.send("Review submitted successfully");
            }
        })
    }
})

router.post('/deleteproduct', (req, res) => {
    Product.findByIdAndDelete({_id : req.body.id}, (error, docs) => {
        if(error){
            res.status(400).json({message:"something went wrong"});
        }else{
            res.send(docs);
        }
    })
})

router.post('/addproduct', (req, res) => {
    const newProduct = new Product(req.body);
    newProduct.save(error => {
        if(error){
            res.send('Something went wrong');            
        }else{
            res.send('User reg success');
        }
    })
});

router.post('/updateproduct', (req, res) => {
    console.log(req.body)
    // delete req.body._id;
    Product.findByIdAndUpdate({_id : req.body._id}, req.body, (error, docs) => {
        if(error){
            console.log(error)
            res.send('Something went wrong');            
        }else{
            res.send('User updated success');
        }
    })
});


module.exports = router;