const express = require("express");
const router = express.Router();

const connection = require("../database/connection");

router.get("/",(req,res)=>{
    res.render("home");
});

router.get("/register",(req,res)=>{
    res.render("register");
});

router.post("/register",(req,res)=>{

    let {name,email,phone,college,skills,interest}=req.body;

    let q=`
    INSERT INTO volunteers
    (name,email,phone,college,skills,interest)
    VALUES(?,?,?,?,?,?)
    `;

    connection.query(
        q,
        [name,email,phone,college,skills,interest],
        (err,result)=>{

            if(err){
                console.log(err);
                return res.send("Database Error");
            }

            res.render("success");
        }
    );

});

module.exports = router;