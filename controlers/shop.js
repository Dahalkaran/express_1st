const path=require('path');
const rootD=require('../util/path');
const save=require('../model/save')
exports.shop=(req, res, next)=>{
    
    //console.log("in another the middleware");
 
           res.sendFile(path.join(rootD, 'views','shop.html'));

        //   save.fetchall((product)=>{
         //    res.json(product)
        //   })
        }