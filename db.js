const mongoose = require("mongoose");
//mongodb+srv://nithin6x9:nithin1760@cluster0.ilkxscq.mongodb.net/

mongoose.connect("mongodb+srv://nithin6x9:nithin1760@cluster0.ilkxscq.mongodb.net/To-Do")
const todoschema = mogoose.Schema({
    title:String,
    description:String,
    status:Boolean
})



