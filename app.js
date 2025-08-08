const userRoute = require("./Route/userRoute")
const blogRoute = require("./Route/blogRoute")
const categoryRoute = require("./Route/categoryRoute")
const express = require("express")
const mongoose = require("mongoose")
require("dotenv/config")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("home")
})

app.use("/api/user",userRoute)
app.use("/api/blog",blogRoute)
app.use("/api/category",categoryRoute)

app.listen(process.env.PORT)

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}

db()