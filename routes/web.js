const express = require("express");
const AdminController = require("../controllers/admin/AdminController");
const BlockController = require("../controllers/BlockController");
const FrontController = require("../controllers/frontcontroller");
const BlogController = require("../controllers/admin/BlogController");
const CategoryController = require("../controllers/admin/CategoryController");
const router =express.Router()
//FrontController route

//router.get("/",FrontController.home)
//router.get("/about",FrontController.about)
//router.get("/contact",FrontController.contact)
//block controller route
router.get("/",BlockController.home)
router.get("/about",BlockController.about)
router.get("/contact",BlockController.contact)
router.get("/blog",BlockController.blog)
router.get("/login",BlockController.login)
router.get("/details",BlockController.details)
//admin controller
router.get("/admin/dashboard",AdminController.Dashboard)
//admin blogcontroller
router.get("/admin/createblog",BlogController.CreateBlog)

router.get("/admin/blogdisplay",BlogController.DisplayBlog)

//admin categorycontroller

router.get("/admin/createcategory",CategoryController.CreateCategory)

router.get("/admin/displaycategory",CategoryController.DisplayCategory)





module.exports = router;