const express=require('express');

const studentRoutes=require('./routes/student');

const app=express();

app.use(express.urlencoded({extended: true})); //za ucitavanje podataka u razlicitim formatima
//ovaj iznad je za POST mestodu kod formulara
app.use(express.json());


app.use(express.static(__dirname + "/public")); //ovo je da ucita ceo public
                                                //tj i html i css kodove


//sada jer smo ucitali public folder iznad, nije nam potrebno da ga ucitavamo
//ovim kodom ispod koji cemo komentarisati

app.use(studentRoutes);

//app.use('/hello-world', function (req, res, next){  //kad odemo na localhost:300/hello-world vraca
//    res.sendFile(__dirname + "/public/index.html"); //index.html
//});

app.use(function(err,  req, res, next){   //za gresku
    console.log('Greska na serveru!');
    console.log(err);
});



module.exports=app;

