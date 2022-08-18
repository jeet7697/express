const CategoryModel = require('../../models/Category')

class CategoryController{
    static CreateCategory = async(req,res)=>{
        res.render('admin/category/createcategory')

    }
    static CategoryInsert =async(req,res)=>{
        //console.log(req.body.title)
        try{
            const{catname}=req.body
            const result = new CategoryModel({
                catname:catname
               
            })
            //saveing data
            await result.save()
            res.redirect('/admin/createcategory')//route k url
    
        }catch(err){
            console.log(err)
        }
    }

        static DisplayCategory =async(req,res)=>{
            try{
                const result = await CategoryModel.find()
                console.log(result)
                res.render('admin/category/displaycategory',{data:result});
        
            }catch(err){
                console.log(err)
            }
        }
        
        static Categoryview =async(req,res)=>{
            // res.render('curd/view')
            // console.log(req.params.id)
            try{
                const result = await CategoryModel.findById(req.params.id)
                console.log(result)
                res.render('admin/category/viewcategory',{data:result})
        
            }catch(err){
                console.log(err)
            }
        
        } 



        static CategoryEdit =async(req,res)=>{
            // res.render('curd/view')
            // console.log(req.params.id)
            try{
                const result = await CategoryModel.findById(req.params.id)
                console.log(result)
                res.render('admin/category/editcategory',{data:result})
        
            }catch(err){
                console.log(err)
            }
        
        } 
        static CategoryDelete =async(req,res)=>{
            // res.render('curd/view')
            // console.log(req.params.id)
            try{
                const result = await CategoryModel.findByIdAndDelete(req.params.id)
                console.log(result)
               res.redirect('/admin/displaycategory')
            }catch(err){
                console.log(err)
            }
        
        } 
        static CategoryUpdate =async(req,res)=>{
            // res.render('curd/view')
            // console.log(req.params.id)
            try{
                const result = await CategoryModel.findByIdAndUpdate(req.params.id,req.body)
                console.log(result)
                res.redirect('/admin/displaycategory')
                
        
            }catch(err){
                console.log(err)
            }
        
        } 

        }
       










    







module.exports = CategoryController;