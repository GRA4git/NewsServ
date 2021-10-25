const { Router } = require("express")
const categoriesController = require("../controllers/categories.controller")

const router = Router

router.post("/", categoriesController.addCategory)
router.delete("/", categoriesController.deleteCategoryById)
router.get("/", categoriesController.getAllCategories)