//contoh : 
function lempardadu() {
    console.log(Math.floor(Math.random() * 6) +1);
}

//Argumen dan parameter
function Greeting(nama) {
    console.log(`Halo, ${nama}! selamat datang!`);

}
Greeting('Erika');

//return 
function jumlahkan(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Bukan angka';

    }
    return a + b;
}

//Scope 
let programming = 'Javasript'; 

function typeSafe() {
    let programming = 'Typescript'; //jika ini tidak di deklarasikan ulang atau hanya programming = 'Typescript' maka akan merubah nilai variabel di luar scope
    console.log(programming);
}

typeSafe(); 
console.log(programming);

//blocked scope 
//let dan const memiliki blocked scope
//var tidak memiliki blocked scope
let tinggi = 8;
if (tinggi > 5) {
    let tinggi = 10;
    console.log(lebar);
}

console.log('Lebar :', lebar);

for (let index = 0; index < 10; index++) {
    let indexnumber = index;
    console.log(indexnumber);
}
console.log('index:', indexnumber); //akan error karena diluar scope

//Lexical scope : ada function di dalam function
function bahasaprogrammer() {
    const bahasa = 'Javascript';

    function bahasapopuler() {
        let populer = 'Orang keren ngodingnya pakai ${bahasa}';
        console.log(populer);
    }
    bahasapopuler();
}

//Function expression
const hasilperpangkatan = function (nilai, pembanding) {
    return nilai ** pembanding;
};

//Function sebagai argument
function duaKali(func) {
    func();
    func();
}

function lemparDadu() {
    const hasil = Math.flooor(Math.random()*6) +1;
    console.log(hasil);
}

//Function bernilai balik Function

function hasilnyafunction() {
    const rand = Math.random();
    if (rand > 0.1) {
        return function() {
            console.log('Selamat, angkanya lebih besar');
        };
    } else {
        return function() {
            console.log('Coba lagi ya');
        };
    }
}

//Definisi method 
const myMath = {    //object
    perkalian: function(x, y) { //method
        return x * y;
    }
}

//This : keyword untuk memanggil property pada object yang sama. tujuannya untuk mendapatkan nilai.

const saya = {
    nama : 'Erika',
    hobi : 'ngoding',
    perkenalan : function() {
        return `Saya adalah ${this.nama}. Hobi saya adalah ${this.hobi}.`;
    }
}

//Try and Catch 

try{

} catch {
    
}

