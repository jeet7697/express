const mongoose = require('mongoose');

const con = "mongodb+srv://jeet:7697@cluster0.dku9p0k.mongodb.net/blogweb?retryWrites=true&w=majority"

const connectDB =()=>{


    //return mongoose.connect('mongodb://localhost:27017/blog_website')
    return mongoose.connect(con)
    .then(()=>{
        console.log('Connection successful')
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDB