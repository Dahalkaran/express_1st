const path=require('path');
//const express=require('express');
const save=require('../model/save')
exports.addProduct=(req, res, next)=>{
     
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
  };
  exports.addProduct1=(req, res, next)=>{
    console.log(req.body);
    const sa = new save(req.body.title,req.body.size);
      sa.save();
    res.redirect('/shop');
  };