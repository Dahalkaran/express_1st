const path = require('path');
const rootD = require('../util/path');
exports.contact=(req, res, next)=>{
    res.sendFile(path.join(rootD, 'views','contact.html'));
}
exports.success=(req, res, next) => {
    res.sendFile(path.join(rootD, 'views', 'success.html'));
}