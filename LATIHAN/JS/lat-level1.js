//LATIHAN SOAL BERLEVEL
//LEVEL-1

//1. Penjumlahan dengan function
function tambah(a,b) {
    return a + b
};

//2. Genap atau ganjil
let n = 7;

if (n%2 == 1) {
    console.log("Ganjil")
} else {
    console.log("Genap")
};

//3. Loop while
/* while (true){

}; */

// perbaikan: 
let i = 1;
while (i <= 5){
    console.log(i);
    i++;
}

// 4. Array for of
/*let hewan = ["kucing", "anjing", "kelinci"];*/
//perbaikan: 
let hewan = ["kucing", "anjing", "kelinci"];
for (let h of hewan){
    console.log(h)
}

//5. Cari angka dalam Array
let angka = [1, 2, 3, 4, 5];
//perbaikan : 
if (angka.includes(3)) {
    console.log("Angka 3 ada di array");
} else {
    console.log("Tidak ada");
}

//6. String uppercase
let teks = "belajar javascript"
let hasil = teks.toUpperCase();
console.log(hasil);

//7. Switch Case
let hari = 3;
switch(hari){
    case 1:
        console.log("Senin");
    case 2:
        console.log("Selasa");
    case 3:
    console.log("Rabu");
} 
//perbaikan : 
switch(hari){
    case 1: console.log("Senin"); break;
    case 2: console.log("Selasa"); break;
    case 3: console.log("Rabu"); break;
    case 4: console.log("Kamis"); break;
    case 5: console.log("Jumat"); break;
    case 6: console.log("Sabtu"); break;
    case 7: console.log("Minggu"); break;
    default: console.log("Hari tidak valid");
}


//8. Nilai tertinggi
let array = [45, 82, 12, 67, 99];
//perbaikan
let max = Math.max(...array);
console.log(max);

//9. Object Dasar
let mahasiswa = {
    nama: 'Erika',
    umur: 20,
    jurusan: 'Sistem Informasi',
};

//10. Loop Bersarang
/*for (*)*/
for (let i = 1; i <= 5; i++) {
    let bintang = "";
    for (let j = 1; j <= i; j++) {
        bintang += "*";
    }
    console.log(bintang);
}

//NEXT SOAL

//1.Luas Persegi Panjang
function luasPersegiPanjang (panjang, lebar){
    return hasil = panjang*lebar `Luas persegi panjang = ${hasil}`;
};
//perbaikan:
function luasPersegiPanjang2 (panjang, lebar) {
    let hasil = panjang * lebar;
    return `Luas persegi panjang = ${hasil}`
}

//2. Bilangan positif/negatif/nol
let x = -5;

if (x > 0) {
    console.log("Postif")
} else if (x > 0) {
    console.log("Negatif")
} else if (x = 0) {
    console.log("Nol")
} else {
    console.log ("Salah Input!")
};

//perbaikan : 
if (x > 0){
    console.log("Positif");
} else if (x < 0) {
    console.log("Negatif")
} else if (x === 0) {
    console.log("Nol")
}


//3. Loop For (Kelipatan 2)
for (let i = 2; i<=20; i+=2) {
    console.log(i)
};

//4. Array ForEach

let buah = ["apel", "mangga", "pisang"]
buah.forEach(element => {
    console.log(element)
});

//5. Jumlahkan semua angka di dalam array
let array2 = [2, 4, 6, 8, 10];
let  total = array2.reduce((total, score)=> {
    return total + score
});
//Perbaikan : 
let array3 = [2, 4, 6, 8, 10];
let total2 = array3.reduce((sum, num) => sum + num, 0);
console.log(total2);

//6. String slice
let str = "Belajar Javascript Seru";
str.slice(8, 18);
//perbaikan : 
let result = str.slice(8, 16);
console.log(result);

//7. Switch Case (Bulan)
let bulan = 8; //perbaikan 
switch (bulan) {
    case 1 : 
        console.log ("Januari"); break;
    case 2 : 
        console.log ("Februari"); break;
    case 3 : 
        console.log ("Maret"); break;
    case 4:
        console.log ("April"); break;
    case 5:
        console.log ("Mei"); break;
    case 6:
        console.log ("Juni"); break;
    case 7:
        console.log ("Juli"); break;
    case 8:
        console.log ("Agustus"); break;
    case 9:
        console.log ("September"); break;
    case 10:
        console.log ("Oktober"); break;
    case 11:
        console.log ("November"); break;
    case 12:
        console.log ("Desember"); break;
};

//8. Cari nilai terkecil
let nilai = [34, 2, 56, 7, 89];
let min = Math.min(...nilai);
console.log(min)

//9. Object dengan method
let mobil = {
    merk : "Suzuki",
    tahun : 2011,
    info() {
        console.log(`Mobil ${this.merk}, tahun ${this.tahun}`) //perbaikan this
    }
};

//10. Pola angka
for (let i = 1; i <= 5; i++) {
    let bintang = "";
    for (let j = 1; j <= i; j++) {
        bintang += 1;
    }
    console.log(bintang);
}

//perbaikan :
for (let i = 1; i <= 5; i++) {
    let baris = "";
    for (let j = 1; j <= i; j++) {
            baris += j;
    }
console.log(baris);
}

//NEXT SOAL part.3
//1. Function return (luas segitiga)
function luasSegitiga(alas, tinggi){
    let luas = 1/2 * alas * tinggi
    return `Luas Segitiga adalah ${luas}`
};

//2. Cek angka positif/negatif/nol
let x1 = 0;

if (x1 > 0) {
    console.log("Positif")
} else if (x1 < 0) {
    console.log("Negatif")
} else if (x1 === 0) {
    console.log("Nol")
};

//3. For loop (hitung mundur)
for (let i = 10; i>=1; i-=1) {
    console.log(i)
};

//4. Jumlah elemen array
let baris = [5, 10, 15, 20];
let total3 = baris.reduce((sum, num) => sum + num, 0);
console.log(total3);

//5. Array includes
let buah2 = ["apel", "jeruk", "pisang", "mangga"];

if (buah2.includes("pisang")) {
    console.log("Ada pisang!");
} else {
    console.log("Tidak ada pisang!");
}

//6. String slice
let str2 = "Belajar Javascript"
let result2 = str2.slice(0, 7)
console.log(result2);

//7. Switch Case (Hari)
let hari2 = 5;
switch(hari2) {
    case 1 : 
        console.log("Senin"); break;
    case 2 : 
        console.log("Selasa"); break;
    case 3 : 
        console.log("Rabu"); break;
    case 4 : 
        console.log("Kamis"); break;
    case 5 : 
        console.log("Jum'at"); break;
    case 6 : 
        console.log("Sabtu"); break;
    case 7 : 
        console.log("Minggu"); break;
};

//8. Nilai Minimum & Maksimum 
let nilai2 = [12, 99, 3, 45, 77];
let min2 = Math.min(...nilai2);
console.log(min2);

let max2 = Math.max(...nilai2);
console.log(max2)

//9. Object dengan method 
let buku = {
    judul: "Ngoding yuk!",
    penulis: "inthumaktics",
    info() {
        console.log(`Judul: ${this.judul}, Penulis: ${this.penulis}`)
    }

};

//10. Pola angka segitiga
// for (let i = 1; i <= 5; i++) {
//     let baris = "";
//     for (let j = 1; j <= i; j++) {
//             baris += j;
//     }
// console.log(baris);
// };

//perbaikan : 
for (let i = 1; i<= 5; i++){
    let baris = "";
    for (let j = 1; j<= i; j++)[
        baris += i
    ]
    console.log(baris);
}
