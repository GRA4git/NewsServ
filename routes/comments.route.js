const {Router} = require("express")
const commentsController = require("../controllers/comments.controller")

const router = Router

router.post("/", commentsController.addCommentByNews)
router.delete("/", commentsController.deleteCommentById)
router.get("/", commentsController.getCommentsByNews)

module.exports = router