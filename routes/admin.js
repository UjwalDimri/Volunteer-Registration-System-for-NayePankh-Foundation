const express = require("express");
const router = express.Router();

const connection = require("../database/connection");

router.get("/admin/login",(req,res)=>{
    res.render("adminLogin");
});

router.post("/admin/login",(req,res)=>{

    let {username,password}=req.body;

    if(username==="admin" && password==="admin123"){
        res.redirect("/dashboard");
    }
    else{
        res.send("Invalid Credentials");
    }

});
router.get("/dashboard",(req,res)=>{

    let q="SELECT * FROM volunteers";

    connection.query(q,(err,result)=>{

        if(err){
            console.log(err);
            return res.send("Error");
        }

        res.render("dashboard",{result});

    });

});
router.get("/edit/:id",(req,res)=>{

    let {id}=req.params;

    let q="SELECT * FROM volunteers WHERE id=?";

    connection.query(q,[id],(err,result)=>{

        if(err){
            console.log(err);
            return res.send("Error");
        }

        let volunteer=result[0];

        res.render("edit",{volunteer});

    });

});
router.put("/edit/:id",(req,res)=>{

    let {id}=req.params;

    let {
        name,
        email,
        phone,
        college,
        skills,
        interest
    } = req.body;

    let q=`
    UPDATE volunteers
    SET
    name=?,
    email=?,
    phone=?,
    college=?,
    skills=?,
    interest=?
    WHERE id=?
    `;

    connection.query(
        q,
        [
            name,
            email,
            phone,
            college,
            skills,
            interest,
            id
        ],
        (err,result)=>{

            if(err){
                console.log(err);
                return res.send("Error updating");
            }

            res.redirect("/dashboard");

        });

});
router.delete("/delete/:id",(req,res)=>{

    let {id}=req.params;

    let q="DELETE FROM volunteers WHERE id=?";

    connection.query(q,[id],(err,result)=>{

        if(err){
            console.log(err);
            return res.send("Error deleting");
        }

        res.redirect("/dashboard");

    });

});

module.exports = router;