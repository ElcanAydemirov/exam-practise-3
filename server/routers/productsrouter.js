const express = require("express")
const { getAll, getById, deletById, post, editById } = require("../controllers/productcontrollers")
const router = express()


router.get("/", getAll)
router.get("/:id", getById)
router.delete("/:id", deletById)
router.post("/", post)
router.put("/:id", editById)

module.exports = router