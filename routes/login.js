const express=require("express");
const check=require("../controller/controller");
const router =express.Router();
router.get("/",(req,res)=>{
    res.render("login");
})
router.get("/check",check)
module.exports=router;