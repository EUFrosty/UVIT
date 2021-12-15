const express=require('express');

const studentController = require('../contollers/student.js');

const router=express.Router();



// router.get("/student", function(req, res, next){
//     const data=req.query;
//     console.log('Username', data.username);
//     console.log('Password', data.password);
//     res.sendFile("/home/wei/Desktop/UVIT/9/public/student.html");
// });

router.post("/student", studentController.getStudentByUsername);
router.post("/student/update", studentController.updateStudentInfo);
//POST http://localhost:3000/student/delete/mi10050
router.post("/student/delete/:username/", studentController.deleteStudentByUsername);

module.exports = router;