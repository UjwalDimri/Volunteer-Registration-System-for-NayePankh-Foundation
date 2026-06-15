require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const path = require("path");
const methodOverride = require("method-override");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));

// Routes
const volunteerRoutes = require("./routes/volunteer");
const adminRoutes = require("./routes/admin");

app.use("/",volunteerRoutes);
app.use("/",adminRoutes);

app.listen(port,()=>{
    console.log(`Server Running at port ${port}`);
});