const express=require("express");
const app=express();
app.listen(3000);
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.get("/users/:id/:name",(req,res)=>{
    res.send(req.params.id);
})