const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mydb");
var con=mongoose.connection;
var schema=mongoose.Schema({_id:String, password:String, name:String, role:String});
var MyModel=mongoose.model("user",schema)
module.exports=MyModel;