const {getCategory,postCategory,putCategory,deleteCategory} = require("../Controller/categoryController")
const admin = require("../Middleware/admin")
const auth = require("../Middleware/auth")

const route = require("express").Router()

route.get("/",getCategory)
route.post("/",[auth,admin],postCategory)
route.put("/:id",auth,putCategory)
route.delete("/:id",auth,deleteCategory)

module.exports = route