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

//CEK KONDISI BERLAPIS 
const password = prompt("Buat password :");

//Password harus sepanjang 6 karakter
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('Password valid');
    }
    else {
        console.log('Password tidak boleh ada spasi')
    }   
}
else {
    console.log('Password minimal 6 karakter');
}

//IF dengan OPERATOR LOGIKA
//&& (AND)
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log('Password valid');
}
else {
    console.log('Password tidak valid');
}

// || (OR)
const role = prompt("Masukkan role akun :");

if (role === 'admin' || role === 'spv') {
    console.log('Boleh mengaksesnya')
}
else {
    console.log('Akses ditolak');
}

//! (NOT)
const role2 = prompt("Masukkan role akun :");

if (role2 !== 'admin') {
    console.log('Akses ditolak');
}
else {
    console.log('Boleh mengaksesnya')
}

//SWITCH (alternatif if statement)
const balonku = prompt("Masukkan warna balon :");
switch (balonku) {
    case 'merah':
        console.log('Warna merah');
        break;
    case 'hijau':
        console.log('DOORRRR');
        break;
    default:
        console.log('bukan balonku');
}