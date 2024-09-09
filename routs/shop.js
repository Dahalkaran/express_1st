const path=require('path')
const express=require('express');
//const rootD=require('../util/path');
//console.log(rootD);
const routs=express.Router();
const shop=require('../controlers/shop')
routs.get('/',shop.shop);
module.exports=routs;