const BlogModel = require("../../models/Blog")

class BlogController{
    static CreateBlog =(req,res)=>{
        res.render('admin/blog/createblog')
    }

    static BlogInsert =async(req,res)=>{
        //console.log(req.body.title)
        try{
            const{title,description,image}=req.body
            const result = new BlogModel({
                title:title,
                description:description,
                image:req.file.filename
            })
            //saveing data
            await result.save()
            res.redirect('/admin/createblog')//route k url

        }catch(err){
            console.log(err)
        }
    }



    static DisplayBlog =async(req,res)=>{
        try{
            const result = await BlogModel.find()
            console.log(result)
            res.render('admin/blog/displayblog',{data:result});

        }catch(err){
            console.log(err)
        }
 }

    static Blogview =async(req,res)=>{
        // res.render('curd/view')
        // console.log(req.params.id)
        try{
            const result = await BlogModel.findById(req.params.id)
            console.log(result)
            res.render('admin/blog/viewblog',{data:result})

        }catch(err){
            console.log(err)
        }
    }
   

    static Editblog =async(req,res)=>{
        // res.render('curd/view')
        // console.log(req.params.id)
        try{
            const result = await BlogModel.findById(req.params.id)
            console.log(result)
            res.render('admin/blog/editblog',{data:result})

        }catch(err){
            console.log(err)
        }
    }
    static BlogEdit = async (req, res) => {
        try {
          //console.log(req.params.id);
          const result = await BlogModel.findById(req.params.id);
          console.log(result);
          res.render("admin/blog/editblog", { data: result });
          // ye render m path sahi daalna h
        } catch (err) {
          console.log(err);
        }
      }
      static UpdateBlog = async (req, res) => {
        //  console.log(req.params.id)
        //   console.log(req.body);
    
        try {
            if(req.file){
                var imagefile = req.file.filename
            }
          //console.log(req.params.id);
          const result = await BlogModel.findByIdAndUpdate(req.params.id,{
            title:req.body.title,
            description:req.body.description,
            image:imagefile
          })
       
           // console.log(result);
          res.redirect("/admin/blogdisplay");
          // ye render m path sahi daalna h
        } catch (err) {
          console.log(err);
        }
      }
    static DeleteBlog =async(req,res)=>{
        
         //console.log(req.params.id)
        // console.log(req.body)
        try{
            const result = await BlogModel.findByIdAndDelete(req.params.id)
            //console.log(result)
            res.redirect('/admin/blogdisplay');

        }catch(err){
            console.log(err)
        }
    }
    

}




module.exports = BlogController