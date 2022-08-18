const mongoose = require('mongoose')

// schema or field
const CategorySchema = new mongoose.Schema({
    catname:{
        type:String,
        Required:true,
    }
},{timestamps:true})

// create model

const CategoryModel = mongoose.model('category',CategorySchema); //BLOG IS NAME OF COLLECTION

module.exports = CategoryModel