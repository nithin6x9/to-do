const express = require("express");
const {createtodo} = require("/types");
const {todo} = require("./db");
const app = express();
const cors = require("cors");
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

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        status: false
    })

})

app.get("/todo",function(req,res){
    const todos = await todo.find({});

    res.json({
        todos
    })

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
    await todo.update({
        _id: req.body.id
    },{
        status: true
    })
    re.json({
        msg:"ToDo marked as complete"
    })

})

app.listen(3000)