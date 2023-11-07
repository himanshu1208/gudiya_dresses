const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConfig = require('./database.config');
const Product = require('./Product');
var cors = require('cors')

//connecting to database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

const app = express();
const corsOpts = {
    origin: '*',
    methods: [
      'GET',
      'POST',
    ],
    allowedHeaders: [
      'Content-Type',
    ],
};

//middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors(corsOpts));

//routes
app.get('/productList', (req, res) => {
    res.json({"message": "Development in progress"});
});

app.post('/addProduct', (req, res) => {
    const productData = new Product({
        gender: req.body.gender,
        size: req.body.size,
        productName: req.body.productName,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        gowdownNumber: req.body.godown,
        laatMaal: req.body.laatMaal
    });
    try {
        productData.save();
        res.status(201).json({
            message: "Added"
        });
    }
    catch {
        console.log("Failed");
        res.status(500).json({
            message: "Failed"
        });
    }
});

//server Running
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
