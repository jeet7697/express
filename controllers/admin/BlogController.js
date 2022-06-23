class BlogController{
    static CreateBlog =(req,res)=>{
        res.render('admin/blog/createblog')
    }

        static DisplayBlog =(req,res)=>{
            res.render('admin/blog/displayblog')
        }



}



module.exports = BlogController