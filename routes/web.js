
const express = require("express");
const AdminController = require("../controllers/admin/AdminController");
const BlockController = require("../controllers/BlockController");
const FrontController = require("../controllers/frontcontroller");
const BlogController = require("../controllers/admin/BlogController");
const CategoryController = require("../controllers/admin/CategoryController");
const CurdController = require("../controllers/CurdController");
const ContactController = require("../controllers/admin/contactcontroller");

const aboutmiddleware = require('../middleware/aboutmiddleware') // middleware
const image_middlewarwe = require('../middleware/image_middleware');
const UserController = require("../controllers/user/UserController");


const router =express.Router()

//FrontController route

//router.get("/",FrontController.home)
//router.get("/about",FrontController.about)
//router.get("/contact",FrontController.contact)
//block controller route
router.get("/",BlockController.home)
router.get("/about",aboutmiddleware,BlockController.about)

router.get("/blog",BlockController.blog)
router.get("/login",BlockController.login)

router.get('/detail/:id',BlockController.detail)



//admin controller
router.get("/admin/dashboard",AdminController.Dashboard)
//admin blogcontroller
router.get("/admin/createblog",BlogController.CreateBlog)

router.post('/bloginsert',image_middlewarwe,BlogController.BlogInsert)

router.get("/blog/viewblog/:id",BlogController.Blogview)

router.get("/admin/blogdisplay",BlogController.DisplayBlog)



router.get("/admin/deleteblog/:id",BlogController.DeleteBlog)

router.get("/blog/editblog/:id", BlogController.BlogEdit);
//update blog
router.post("/admin/blogupdate/:id",image_middlewarwe, BlogController.UpdateBlog);


//admin categorycontroller

router.get("/admin/createcategory",CategoryController.CreateCategory)

router.post('/categoryinsert',CategoryController.CategoryInsert)
router.get("/admin/viewcategory/:id",CategoryController.Categoryview)

router.get("/admin/displaycategory",CategoryController.DisplayCategory)

router.get("/cat/editcat/:id",CategoryController.CategoryEdit)

router.post('/categoryupdate/:id',CategoryController.CategoryUpdate)
router.get("/admin/deletecategory/:id",CategoryController.CategoryDelete)





//CurdController
router.get('/curd/create',CurdController.Createform)
router.post('/curd/insert',CurdController.Inserdata)

router.get("/curd/display",CurdController.DisplayCurd)
router.get('/curd/view/:id',CurdController.Curdview)
router.post('/curd/update/:id',CurdController.UpdateData)
router.get('/curd/edit/:id',CurdController.CurdEdit)
router.get('/curd/delete/:id',CurdController.CurdDelete)

//contact
router.get("/contact", ContactController.contact);
router.post("/contactinsert", ContactController.InsertContact);
router.get("/contactdisplay", ContactController.DisplayContact);
router.get("/viewcontact/:id",ContactController.ViewContact);
router.get("/delete/:id", ContactController.DeleteContact);

//user controller

router.get("/register", UserController.register);
router.post("/registerinsert", UserController.registerinsert);
router.post("/verifylogin", UserController.Verifylogin);

router.get("/logout", UserController.logout);











module.exports = router;