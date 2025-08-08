const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    active:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("category",categorySchema)