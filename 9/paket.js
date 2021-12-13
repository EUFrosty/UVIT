const studenti = [
    {indeks: 20200001, ime: "Pera"},
    {indeks: 20200002, ime: "Ana"},
    {indeks: 20200003, ime: "Laza"}
];

const brojSt={broj: 3};

function dodajStudenta(indeks, ime){
    studenti.push({indeks, ime});
    brojSt.broj++;
}

function pronadjiStudenta(indeks){
    for (const student of studenti){
        if(student.indeks===indeks){
            return student;
        }
    }
    return null;
}

module.exports.dodajStudenta = dodajStudenta;
module.exports.pronadjiStudenta = pronadjiStudenta;
module.exports.brojSt = brojSt;

// module.exports=[
//     dodajStudenta,
//     pronadjiStudenta,
//     brojSt
// ];