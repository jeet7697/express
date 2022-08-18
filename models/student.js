const mongoose = require('mongoose')

// schema or field
const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        Required:true,
    },
    email:{
        type:String,
        Required:true,
    }
},{timestamps:true})

// create model

const StudentModel = mongoose.model('student',StudentSchema); //BLOG IS NAME OF COLLECTION

module.exports = StudentModel