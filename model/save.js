const fs=require('fs');
const path=require('path');
const filePath=path.join(__dirname,'../','data','messages.txt')
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);
const file1=()=>{
  
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    }
    else{
      cb(JSON.parse(fileContent));
    }
    
  });
}
module.exports= class Pro{
         constructor(title,size){
            console.log(title);
            this.titel = title; 
            this.size = size;
         }
         save(){
            const p= path.join(__dirname,'../','data','products.json')
             file1(products =>{
              products.push(this);
               fs.writeFile(p, JSON.stringify(products), err => {
                 console.log(err);
               });
             });
               
               
            
         }
         static fetchAll(cb) {
         file1(cb);
        }
}