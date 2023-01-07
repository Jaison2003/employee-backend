const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose")

var app=Express()
app.get("/",(req,res)=>{
    res.send("welcome to employee page")
})
app.get("/add",(req,res)=>{
    res.send("welcom to employe details entry page")
})

app.get("/search",(req,res)=>{
    res.send("employe search page")
})

app.get("/delete",(req,res)=>{
    res.send("employe delete page")
})

app.get("/edit",(req,res)=>{
    res.send("employe edit page")
})

app.listen(3000)