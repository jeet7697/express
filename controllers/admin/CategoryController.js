class CategoryController{
    static CreateCategory =(req,res)=>{
        res.render('admin/category/createcategory')
    }

        static DisplayCategory =(req,res)=>{
            res.render('admin/category/displaycategory')
        }
}

module.exports = CategoryController;