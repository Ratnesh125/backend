const bodyParser=require("body-parser");
const express=require("express");
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.listen(5000);
app.engine("html",require("ejs").renderFile);
app.set("view engine","html");
const cors=require("cors");
app.use(cors());
app.use(express.json());

const homeRouter=require("./routes/home");
const loginRouter=require("./routes/login");
const userRouter=require("./routes/user");

app.use("/users",userRouter);
app.use("/login",loginRouter);