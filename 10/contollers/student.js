const studentModel=require('../models/student.js');

function getStudentByUsername(req, res, next){
    const username = req.body.username;
    const password = req.body.password;

    const student = studentModel.getStudentByUsername(username);
    
    if(student == null){
        res.render('error.ejs', {
            message: "Nije pronadjen student za dati username."
        });
        return;
    }
    
    
    
    const passwordsMatch = studentModel.doPasswordsMatch(student, password);

    if(!passwordsMatch){
        res.render('error.ejs', {
        message: 'Pogresili ste lozinku. Pokusajte ponovo.'});
    } 
    
    
    res.render('student.ejs', {
        title: 'Dobrodosli, ' + username, 
        student: student,
        username: username,
        password: password,
        grades: [7, 8, 9, 6]
    });
}

function updateStudentInfo(req, res, next){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const major = req.body.major;

    const student = studentModel.getStudentByUsername(username);
    if(student === null){
        res.render('error.ejs', {
            message: "Nije pronadjen student za dati username."
        });
        return;
    }

    student.password=password;
    student.name=name;
    student.major=major;

    studentModel.updateStudentInfo(student);

    res.render('student.ejs', {
        title: 'Dobrodosli, ' + username, 
        student: student,
        username: username,
        password: password,
        grades: [7, 8, 9, 6]
    });
}

function deleteStudentByUsername(req, res, next){
    const username=req.params.username;
    const password=req.body.password;

    const student = studentModel.getStudentByUsername(username);
    if (student.password!== password){
        res.render('error.js', {message: "Brisanje nije uspesno. Lozinka je pogresna!"});
        return;
    }
    studentModel.deleteStudent(username);

    res.redirect("/index.html");

}   


module.exports = {
    getStudentByUsername,
    updateStudentInfo,
    deleteStudentByUsername

};