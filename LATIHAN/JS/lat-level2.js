//LATIHAN LEVEL-2
//1. Fungsi kuadrat
function kuadrat (angka){
    return angka*angka;
}
kuadrat (5);
//perbaikan : 
console.log(kuadrat(5));

//2. Jumlah bilangan genap
for (let i=1; i>= 20; i++){
    console.log()
};
//perbaikan : 
let total = 0;
for (let i = 1; i <= 20; i++) {
    if (i%2 === 0){
        total +=i;
    }
}
console.log(total);

//3. Loop mundur kelipatan 3
for (let i=30; i>=3; i-=3) {
    console.log(`Kelipatan 3 = ${i}`)
};

//4. Array map 
let array = [1, 2, 3, 4, 5]
let kuadrat = array.map(function(x){
    return x * x;
});
console.log(array);
console.log(kuadrat);

//5. Cek Palindrome 
function cekPalindrome(kata) {
    let balik = kata.split("").reverse().join("");
    return kata === balik;
};
console.log(cekPalindrome("katak")); //true
console.log(cekPalindrome("apel")); //false

//6. String Replace
let kata = "javascript asik abis";
let ganti = kata.replace(/a/g,"@");
console.log(ganti);



//7. Object Method dengan parameter
const calculator = {
    tambah(a, b){
        let hasil = a+b;
        return hasil
    },
    kali(a, b){
        let hasil = a*b;
        return hasil
    } 
};
console.log(calculator.tambah(3,4));
console.log(calculator.kali(3,4));

//8. Cari nilai genap dalam array
let array2 = [3, 8, 11, 14, 17, 20]
//perbaikan :
let genap = array2.filter(num => num%2 === 0);
console.log(genap);

//9. Hittung jumlah huruf
let kata2 = "programming is cool";
let str = kata2.split("o").length - 1;
console.log(str)


//10. Pola segitiga bintang
for (let i = 1; i <= 5; i++) {
    let bintang = "";
    for (let j = 1; j <= i; j++) {
        bintang += "*";
    }
    console.log(bintang);
}

//NEXT SOAL

//1. Fungsi Pangkat
function pangkat(a, b) {
    let hasil = a**b
    return hasil
};

pangkat(2, 3)
console.log(pangkat(2, 3));

//2. Jumlah Bilangan Ganjil
let total4 = 0;
for (let ganjil = 1; ganjil <= 15; ganjil += 2){
    console.log(`Ini angka ke- ${ganjil}`)
    total += ganjil;
};

//3. Loop Mundur
for (let mundur = 20; mundur >= 1; mundur --){
    console.log(`Ini mundur ke-${mundur}`)
};

//4. Array Filter
let random = [5, 12, 7, 20, 9];

let lebih10 = random.filter(num => num > 10);
console.log(lebih10);

//5. Balik String
let str3 = "Hello"
let balik2 = str3.split("").reverse().join("")
console.log(balik2);

//6. String Replace All
let kata3 = "indonesia itu indah";
let ganti2 = kata3.replace(/i/g, "!");
console.log(ganti2)

//7. Object dengan 2 method
const mathTool = {
    kurang(a, b) {
        let hasil = a - b;
        return hasil
    },
    bagi(a, b) {
        let hasil = a / b;
        return hasil
    }
};
console.log(mathTool.kurang(10, 4));
console.log(mathTool.bagi(10, 2));

//8. Cari angka tertentu dalam array
let angka1 = [10, 25, 30, 45, 60];

if (angka1.includes(30)){
    console.log("Ketemu")
} else {
    console.log("Tidak ada")
};

//9. Hitung jumlah huruf tertentu
// console.log(`Jumlah huruf a adalah ${huruf_a[a].length}`);
//perbaikan :
let huruf_a = "javascript adalah asik";
let jumlahA = huruf_a.split("a").length - 1;
console.log(`Jumlah huruf 'a' adalah ${jumlahA}`)

//10. Pola segitiga angka
for (let i= 1; i<= 5; i++){
    let angka = "";
    for (let j = 1; j <= i; j++){
        angka += j;
    }
    console.log(angka);
};

//NEXT TO BATCH 3

//1. Fungsi jumlah array 

function jumlahArray([arr]) {
    let hasil = arr.length
    return hasil 
};

console.log(jumlahArray([2, 4, 5, 6, 7]))


//2. Fungsi Pembalik Kalimat 
function balikKalimat(kalimat){

}

//3. Loop Kelipatan 5 
for (let i=5; i<= 50; i+=5) {
    console.log(`Kelipatan ke- ${i}`)
};

//4. Array Map - Perkalian 10
