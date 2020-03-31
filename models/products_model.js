//importing library
const mongoose = require('mongoose');

//creating product schema
const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

//exporting module
module.exports = Product;