const express = require("express");
const app = express();
const port = 8080;

const path = require("path");
const methodOverride = require("method-override");

// MySQL Connection
const connection = require("./database/connection");

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.get("/register",(req,res) => {
    res.render("register.ejs");
});
app.post("/register",(req,res)=>{
    let {name,email,phone,college,skills,interest}=req.body;
    let q = `
    INSERT INTO volunteers
    (name,email,phone,college,skills,interest)
    VALUES(?,?,?,?,?,?)
    `;
    try{
    connection.query(q,[name,email,phone,college,skills,interest],(err,result)=>{
        res.render("success.ejs");
    });
    } catch(err) {
        console.log(`${err}Error:DATABASE ISSUE`);
        res.send(`DATABASE ERROR`);
    }
});
app.get("/admin/login",(req,res)=>{
    res.render("adminLogin");
});

app.post("/admin/login", (req, res) => {

    let { username, password } = req.body;
    if (username === "admin" && password === "admin123") {
        res.redirect("/dashboard");
    } else {
        res.send("Invalid Credentials");
    }

});

app.get("/dashboard", (req, res) => {

    let q = "SELECT * FROM volunteers";

    connection.query(q, (err, result) => {

        if (err) {
            console.log(err);
            return res.send("Error");
        }

        res.render("dashboard", { result });

    });

});
// Server
app.listen(port, () => {
    console.log(`Server Running at port ${port}`);
});