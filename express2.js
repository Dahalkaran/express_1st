const path=require('path');
const express=require('express');
const rootD=require('./util/path');

const bodyParser=require('body-parser')
const app=express();
const adminRoutes=require('./routs/admin');
const shopRoutes=require('./routs/shop');
const contactUs=require('./routs/contact');
const notFound=require('./controlers/404not')

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes);

app.use('/shop',shopRoutes);

app.use('/contact',contactUs);

app.use(notFound.notFound);
app.listen(3000);
//const server=http.createServer(app);
//server.listen(3000);