const express=require('express');
const router=express.Router();

router.get("/student", function(req, res, next){
    const data=req.query;
    console.log('Username', data.username);
    console.log('Password', data.password);
    res.sendFile("/home/wei/Desktop/UVIT/9/public/student.html");
});

router.post("/student", function(req, res, next){
    const data=req.body;
    console.log('Username', data.username);
    console.log('Password', data.password);
    res.sendFile(__dirname + ".." + "/public/student.html");
});

module.exports=router;