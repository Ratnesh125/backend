const check=require("../controller/check");
const express=require("express");
const router=express.Router();
const User=require("../models/mymodel")

router.get("/" ,async(req,res)=>{
    var data=await User.find();
    res.send(data);
})

router.post("/" ,async(req,res)=>{
    try{
    var user=new User(req.body);
    var r=await user.save();
    res.send(r);
    }
    catch(err){res.send(err);}
})

router.get("/add" ,(req,res)=>{
   res.render("adduser")
})

router.delete("/:id" ,async(req,res)=>{
    var data=await User.findByIdAndDelete(req.params.id);
    res.json(data);
})
router.put("/:id" ,async(req,res)=>{
    var data=await User.findByIdAndUpdate(req.params.id,req.body);
    res.json(data);
})
router.get("/:id" ,async(req,res)=>{
    var data=await User.findById(req.params.id);
    res.json(data);
})
module.exports=router;

















router.get("/login",(req,res)=>{
    res.render("login");
})

router.get("/login/check",check);
module.exports = router;