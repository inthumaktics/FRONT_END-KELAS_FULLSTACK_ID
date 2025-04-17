// IF
console.log("Sebelum pembanding")
if (1 + 1 === 2) {
    console.log("Perbandingan")
}

console.log("Setelah pembanding")

let angka = Math.random();
console.log(angka);

if (angka >= 0.5) { 
    console.log("Angka lebih besar dari 0.5"); }

if (angka <= 0.5) {
    console.log("Angka kurang dari 0.5");
}

// ELSE : 
const tahun = prompt("Masukkan tahun :").toLowerCase();

if (tahun === '2022') {
    console.log('Sedang sekolah SMK');
} else if (tahun === '2023') {
    console.log("Kerja di Industri garmen");
} else if (tahun === '2024') {
    console.log("Sedang kuliah di UAD");
} else {
    console.log("Mungkin masih sekolah");
}