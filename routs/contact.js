const path=require('path')
const express=require('express');
const rootD=require('../util/path');
console.log(rootD);
const routs=express.Router();
routs.get('/',(req, res, next)=>{
    res.sendFile(path.join(rootD, 'views','contact.html'));
});
routs.get('/success', (req, res, next) => {
    res.sendFile(path.join(rootD, 'views', 'success.html'));
});

module.exports=routs;