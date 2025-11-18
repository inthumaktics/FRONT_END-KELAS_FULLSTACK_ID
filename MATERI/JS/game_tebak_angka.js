let maximum = parseInt(prompt("Masukkan nilai maksimal!"));
while (!maximum) {
    maximum = parseInt(prompt("Masukkan nilai maksimal!"));

}

const targetNum = Math.floor(Math.random() *maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('Isi tebakan pertamamu!'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    attempts++;
    if (guess > targetNum) {
        guess = parseInt(prompt("Terlalu besar! Coba lagi:"));
    }
    else {
        guess = parseInt(prompt("Terlalu kecil! Coba lagi:"));
    }
}