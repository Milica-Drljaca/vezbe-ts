var godine = 25;
var ime = "Milica";
var studira = true;
var predmeti = ["EPOS", "CLOUD", "Programiranje1"];
var ocene = [10, 9, 8];
//tuples - uredjena n-torka sa tacno odredjenim brojem elemenata
var entorka = ["Milica", 23];
// enumi - vraca indekse elemenata
var Moduli;
(function (Moduli) {
    Moduli[Moduli["TehnologijeElektronskogPoslovanja"] = 0] = "TehnologijeElektronskogPoslovanja";
    Moduli[Moduli["InformacioniSistemi"] = 1] = "InformacioniSistemi";
    Moduli[Moduli["SoftverskoInzenjerstvo"] = 2] = "SoftverskoInzenjerstvo"; // 2
})(Moduli || (Moduli = {}));
var konkretniModul = Moduli.TehnologijeElektronskogPoslovanja;
// objekti
var student = {
    ime: "Milica",
    godine: 23,
    studira: true
};
// unija tipova
var brojIliString = 10;
// Any tip
var biloSta = "Ovo moze biti bilo sta";
// void - najcesce kod funkcija
function sayHello() {
    console.log("Hello");
}
// null i undefined
var n = null;
var u = undefined;
// TypeAssertions
var nekaVrednost = "Ovo je string";
var duzinaStringa = nekaVrednost.length;
console.log(godine, ime, studira); // prvo ispisi primitivne
console.log(predmeti, ocene); // nizove
console.log(entorka); // tuples
console.log(konkretniModul); // enum
console.log(student); // objekat
console.log(brojIliString); // unija tipva
console.log(biloSta); // any
console.log(n, u); // nll
console.log(duzinaStringa);
