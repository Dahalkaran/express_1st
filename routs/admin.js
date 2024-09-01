const path=require('path');
const express=require('express');
const routs=express.Router();
routs.get('/add-Product',(req, res, next)=>{
     
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
  });
routs.post('/add-Product',(req, res, next)=>{
  console.log(req.body);
  res.redirect('/shop');
});


module.exports=routs;