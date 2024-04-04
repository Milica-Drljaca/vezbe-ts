let godine:number=25;
let ime:string="Milica";
let studira:boolean=true;

let predmeti:string[]=["EPOS", "CLOUD", "Programiranje1"];
let ocene:number[]=[10, 9, 8];

//tuples - uredjena n-torka sa tacno odredjenim brojem elemenata

let entorka:[string, number]=["Milica", 23];

// enumi - vraca indekse elemenata

enum Moduli{
    TehnologijeElektronskogPoslovanja, // 0
    InformacioniSistemi, // 1
    SoftverskoInzenjerstvo // 2

}

let konkretniModul:Moduli=Moduli.TehnologijeElektronskogPoslovanja;

// objekti

let student:{ime:String, godine:number, studira:boolean}={
    ime:"Milica",
    godine:23,
    studira:true
}

// unija tipova

let brojIliString:number|string=10;

// Any tip

let biloSta:any="Ovo moze biti bilo sta";

// void - najcesce kod funkcija

function sayHello():void{
    console.log("Hello");
}

// null i undefined

let n:null=null;
let u:undefined=undefined;

// TypeAssertions

let nekaVrednost:any="Ovo je string";
let duzinaStringa:number=(nekaVrednost as string).length;


console.log(godine, ime, studira); // prvo ispisi primitivne
console.log(predmeti, ocene); // nizovi
console.log(entorka); // tuples
console.log(konkretniModul); // enum
console.log(student); // objekat
console.log(brojIliString); // unija tipva
console.log(biloSta); // any
console.log(n, u); // null i undefined
console.log(duzinaStringa); // type assertion
