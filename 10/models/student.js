const studenti=[
    {username: 'mi10050', password: '1234' , name:'Marija' ,major:'Computer science'},
    {username: 'mr85050', password: '5678', name:'Jovana' ,major:'P&S'},
    {username: 'mi84050', password: 'abcd', name:'Milica' ,major:'Prof. of M.'}
];

function getStudentByUsername(username){
    let student = null;
    for (const stud of studenti){
        if(stud.username===username){
        student = stud;
        }
    }
    return student;
}

function doPasswordsMatch(student, password){
    return student !==null && student.password === password;
}

function updateStudentInfo(student){
    for(const stud of studenti){
        if(stud.username = student.username){
            stud.name=student.name;
            stud.password = student.password;
            stud.password = student.password;
            stud.major = student.major;
        }
    }
}

module.exports = {
    getStudentByUsername,
    doPasswordsMatch,
    updateStudentInfo
};