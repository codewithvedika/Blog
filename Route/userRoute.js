const {getUser,postUser,login} = require("../Controller/userController")

const route = require("express").Router()

route.get("/",getUser)
route.post("/",postUser)
route.post("/login",login)

module.exports = route