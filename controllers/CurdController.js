const StudentModel = require('../models/student')

class CurdController{
    static Createform =(req,res)=>{
        res.render('curd/create')
    }

    static Inserdata =async(req,res)=>{
        //console.log(req.body.name)
        try{
            const{name,email}=req.body
            const result = new StudentModel({
                name:name,
                email:email
            })
            //saveing data
            await result.save()
            res.redirect('/curd/create')//route k url

        }catch(err){
            console.log(err)
        }
    }



    static DisplayCurd =async(req,res)=>{
        try{
            const result = await StudentModel.find()
            console.log(result)
            res.render('curd/display',{data:result});

        }catch(err){
            console.log(err)
        }
 }

    static Curdview =async(req,res)=>{
        // res.render('curd/view')
        // console.log(req.params.id)
        try{
            const result = await StudentModel.findById(req.params.id)
            console.log(result)
            res.render('curd/view',{data:result})

        }catch(err){
            console.log(err)
        }
    }

    static CurdEdit =async(req,res)=>{
        // res.render('curd/view')
        // console.log(req.params.id)
        try{
            const result = await StudentModel.findById(req.params.id)
            console.log(result)
            res.render('curd/edit',{data:result})

        }catch(err){
            console.log(err)
        }
    }
    static CurdDelete =async(req,res)=>{
        // res.render('curd/view')
        // console.log(req.params.id)
        try{
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            console.log(result)
            res.redirect('/curd/display')

        }catch(err){
            console.log(err)
        }
    }
    static UpdateData =async(req,res)=>{
        // res.render('curd/view')
        // console.log(req.params.id)
        try{
            const result = await StudentModel.findByIdAndUpdate(req.params.id,req.body);
            console.log(result)
            res.redirect('/curd/display')

        }catch(err){
            console.log(err)
        }
    }

}






module.exports = CurdController

