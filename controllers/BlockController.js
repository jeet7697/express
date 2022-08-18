const BlogModel = require('../models/Blog')
const CategoryModel = require('../models/Category')
class BlockController{
    static home= async(req,res)=>{
    
        try{
            const result = await BlogModel.find()
           // console.log(result)
            res.render('home',{data:result})

        }catch(err){
            console.log(err)
        }
       // res.send(" Welcome to Home Page")
        res.render("home")
    }

    static detail = async(req,res)=>
    {
        try{
           // console.log(req.params.id)
           const result=await BlogModel.findById(req.params.id)
           const cat=await CategoryModel.find()

          // console.log(result)

            res.render('detail',{data:result,catname:cat})
        }catch(err){
            console.log(err)

        }
        res.render("about")
    }

    static about =(req,res)=>
    {
        res.render("about")
    }

    //inside render we need to give file name
    static contact =(req,res)=>
    {
        res.render("contact")
    }
    static blog =(req,res)=>
    {
        res.render("blog")
    }
    static login =(req,res)=>
    {
        res.render("login",{message:req.flash('error')});
    }
    static detail =(req,res)=>
    {
        res.render("detail")
    }
    

}
module.exports =BlockController;