const mongoose = require('mongoose');

var MONGODB_URL = `mongodb+srv://indu:indu@cluster0.uijrt.mongodb.net/mern`;
mongoose.connect(MONGODB_URL, {useUnifiedTopology:true, useNewUrlParser:true});
var dbConnect = mongoose.connection;

dbConnect.on('error', ()=>{
    console.log("Mongo DB connection error")
});

dbConnect.on('connected', ()=>{
    console.log("Mongo DB connection success")
});

module.exports = mongoose;