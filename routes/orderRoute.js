const express = require('express');
const stripePackage = require('stripe');
const router = require('./productRoute');
const {v4 : uuidv4, stringify} = require('uuid');
const Order = require('../models/orderModel');

const SECRET_KEY = 'sk_test_51JSm9ESBK5kchUR4GoqUCmz5KK7fC7OhAeCCEvCbYtFKsBFMLNB3tQftJp4vclL9yv2dkskzNJbmB5tr3fo6cXE700Z5LQXTqL';

const stripe = stripePackage(SECRET_KEY);

router.post('/placeOrder', async (req, res, next) => {
    const {currentUser, token, subTotal, cartItems} = req.body;
    const customer = await stripe.customers.create({
        email : token.email,
        source : token.id
    });
    const payment = await stripe.charges.create({
        amount : subTotal * 100,
        currency : 'inr',
        customer : customer.id,
        receipt_email : token.email
    }, {
        idempotencyKey : uuidv4()
    })
    
    if(payment){
        const order = new Order({
            userid : currentUser._id,
            name : currentUser.name,
            email : currentUser.email,
            orderItems : cartItems.map(item => {
               delete item.countInStock;
               return item;
            }),
            shippingAddress : {
                address : token.card.address_line1,
                city :  token.card.address_city,
                postalCode : token.card.address_zip, 
                country : token.card.address_country
            },
            orderAmount : subTotal,
            transactionId : payment.source.id,
            isDelivered : false
        })
        order.save(err => {
            if(err){
                res.status(400).json({message : "something went wrong"})
            }else{
                res.send("Order placed successfully!!")
            }
        })
    }else{
        res.send('payment failed');
    }

});

router.post('/getOrdersByUser', (req, res, next)=>{
    Order.find(req.body, (error, docs) => {
        if(error){
            console.log(error)
            res.status(400).json({message:"something went wrong"});
        }else{
            res.send(docs);
        }
    })
})

router.get('/getallorders', (req, res) => {
    Order.find({}, (error, docs) => {
        if(error){
            res.status(400).json({message:"something went wrong"});
        }else{
            res.send(docs);
        }
    })
})

module.exports = router;