const MyModel=require("../models/mymodel");
const express=require("express");
const router =express.Router();

router.get("/",(req,res)=>{
    MyModel.find().then(function(data){
        res.render("show",{"data":data});
    })
})

router.post("/add",(req,res)=>{
    var r=new MyModel(req.body);
    r.save();
    res.send("ok");
})





router.get("/delete/:id",(req,res)=>{
    MyModel.deleteMany({"id":req.params.id}).then()
    res.send("<a href=/> show all </a>")
})
router.get("/add",(req,res)=>{
    res.render("home");
})
module.exports=router;