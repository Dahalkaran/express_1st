
const express=require('express');
const contact=require('../controlers/contact')
const routs=express.Router();
routs.get('/',contact.contact);
routs.get('/success',contact.success);

module.exports=routs;