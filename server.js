const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path')
var dbConnection = require('./db');
var productsRoute = require('./routes/productRoute');
var userRoute = require('./routes/userRoute');
var orderRoute = require('./routes/orderRoute');

app.use(bodyParser.json());
app.use('/api/products/', productsRoute);
app.use('/api/users/', userRoute)
app.use('/api/orders/', orderRoute)
app.get('/', (req, res)=>{
    res.send('This is from backend');
});

if(process.env.NODE_ENV){
    app.use('/', express.static(path.join(__dirname, "client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

const port = process.env.PORT || 5000;

app.listen(5000, ()=>console.log(`Server is listening on port ${port}`));