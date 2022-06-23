class  FrontController{
static  home=(req,res)=>
    {
         res.send("******************HOME PAGE************")
    }

static  about=(req,res)=>
    {
        res.send("******************ABOUT PAGE ************")
    }
static  contact=(req,res)=>
    {
         res.send("******************contact  PAGE************")
    }
}
module.exports=FrontController;