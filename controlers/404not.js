const path=require('path');
const rootD=require('../util/path');
exports.notFound=(req,res,next)=>{
    res.status(404).sendFile(path.join(rootD,'views','404.html'));
}