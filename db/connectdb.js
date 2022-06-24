const mongoose = require('mongoose');


const connectDB =()=>{
    return mongoose,connect('mongodb://localhost:27017/blog_website')
    .then(()=>{
        console.log('Connection successful')
 })
 .catch((err)=>{
    console.log(err)
 })
}

module.exports = connectDB