const path=require('path')
const express=require('express');
const rootD=require('../util/path');
console.log(rootD);
const routs=express.Router();
routs.get('/',(req, res, next)=>{
    
    console.log("in another the middleware");
 
           res.sendFile(path.join(rootD, 'views','shop.html'));
});
module.exports=routs;