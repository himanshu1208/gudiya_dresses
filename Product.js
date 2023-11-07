var mongoose = require('mongoose');
var productSchema = new mongoose.Schema({
    gender: String,
    size:  String,
    productName: String,
    price: String,
    description: String,
    quantity: String,
    gowdownNumber: Number,
    laatMaal: Boolean
});
var product = new mongoose.model('Product', productSchema);
module.exports = product;