const paket = require('./paket.js');

console.log('Trenutno ima ' + paket.brojSt.broj + ' studenata');

paket.dodajStudenta(20200004, "Marija");
console.log(paket.pronadjiStudenta(20200004));

console.log('Trenutno ima ' + paket.brojSt.broj + ' studenata');

