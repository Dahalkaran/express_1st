const path=require('path');
const express=require('express');
const routs=express.Router();
const Product=require('../controlers/admin')
routs.get('/add-Product',Product.addProduct)
routs.post('/add-Product',Product.addProduct1);


module.exports=routs;