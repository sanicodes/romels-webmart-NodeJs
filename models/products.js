//Imports
const mongoose = require('mongoose');
const {CategorySchema} = require('./category');

//instantiated the schema
const Schema = mongoose.Schema;

//product schema
const ProductSchema = new Schema({
    name:{type: 'string',required: true},
    description:{type: 'string',required: true},
    price:{type: 'string',required: true},
    category:{type: CategorySchema, required: true},
    imagePath:{type: 'string',required: true},
    availability:{type: 'string',required: true},
}, {timestamps: true}); //added timestamps because we can use this someday


// instatiated the product model based on the schema 
const Product = mongoose.model('product',ProductSchema);

//exported the model
module.exports = Product;