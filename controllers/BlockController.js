
class BlockController{
    static home=(req,res)=>
    {
       // res.send(" Welcome to Home Page")
        res.render("home")
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
        res.render("login")
    }
    static details =(req,res)=>
    {
        res.render("details")
    }
    

}
module.exports =BlockController;