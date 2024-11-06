console.log(__filename)
console.log(__dirname)
//important
const path=require("path")
const fs=require("fs")//catching error

/*fs.mkdir(path.join(__dirname, "/api2"), (err) => {
    if (err) throw err;
    console.log("Directory created successfully!");
});//for catching error if directory alredy exists*/

console.log(path.basename(__filename))
//for extention name
console.log(path.extname(__filename))

//this gives errorfs.makdir(path.join(__dirname,"/api2/api3"),(err)=>{
  //  if(err) throw err;
//})

fs.mkdir(path.join(__dirname,"/api3/api4"),{recursive:true},(err)=>{
     if(err) throw err;
  })

//joining api
//console.log(path.join(__dirname,"api","filename.js"))


/*fs.rm(path.join(__dirname,"/api3/api4"),{recursive:true},(err)=>{
    if(err) throw err;
})*/

fs.writeFile(path.join(__dirname,"/api","api.txt"),"Username : Sarath Chandran M",(err)=>{
    if(err) throw err;
})

