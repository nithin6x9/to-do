const express = require("express");
const {createtodo} = require("/types");
const app = express();

app.use(express.json());

app.post('/todo',function(req,res){
    const createPayload = req.body;
    const parsedPayload = createtodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the Wrong input",
        })
        return;
    }

})

app.get("/todo",function(req,res){

})

app.pust("/completed",function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You gave the wrong input",
        })
        return ;
    }

})
