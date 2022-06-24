const express = require("express");
const connectDB = require("./db/connectdb.js");
const app=express() //method
const port =3001;
// router link
const web =require("./routes/web.js")
//load router 

//by default path to routes
app.use("/",web)
//  set ejs template engine  no require needed 
app.set("view engine","ejs")
// view engine is predefined path  no need to change 
//to serve static file css,images,js
app.use(express.static('public'))

connectDB();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })