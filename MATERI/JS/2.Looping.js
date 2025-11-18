for (let i = 1; i<=20; i++) {
    console.log("Aku belajar javascrript");
    console.log(`Perulangan ke-${i}`);
}

for (let i = 1; i<=20; i +=3) {
    console.log("Aku belajar javascrript");
    console.log(`Perulangan ke-${i}`);
}

//Data dari array -->> diawali dengan 0
const animals =['cat', 'deer', 'dog', 'koala', 'zebra'];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}

//NESTED LOOP
const pilihan = 'abcd';
for (let i = 1; i<= 10; i++) {
    console.log(`${i}. Soal nomor ${i}:`);
    for (let j = 0; j < pilihan.length; j++){
        console.log(`   ${pilihan[j]}.Pilihan jawaban`);
    }
}

//Data dari Array
const stundentsRow = [
    ['andi', 'budi', 'caca'],
    ['dodi', 'erik', 'fafa'],
    ['gaga', 'hadi', 'inti']
];

for (let i = 0; i < stundentsRow.length; i++) {
    const row = stundentsRow[i];
    console.log(`Seat Row #${i+1}`);
    for (let j = 0; j < row.length; j++) {
        console.log(`   ${row[j]}`);
    }
} 

//WHILE LOOP
const password = 'admin123';

let guess = prompt("Enter the password :");
while (guess !== password) {
    guess = prompt("Enter the password :");

}
alert('Congrats! the password is corect');

//Break
let input = prompt('Just content!');
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === 'stop') break;
}
alert('OK, you stop the loop!');

for (let i = 0; i < 10000; i++) {
    console.log(i);
    if (i === 100) break;
}

//For Of
const fruits = ['apple', 'banana', 'cherry', 'date'];
for(let fruit of fruits) {
    console.log(fruit);
}

//For In
const studentscore ={
    andi: 90,
    budi: 85,
    caca: 95,
    dodi: 80,
};

for (let student in studentscore) {
    console.log(`${student} scored ${studentscore[student]}`);
}

let total = 0;
let scores = Object.values(studentscore);
for(let score of scores) {
    total += score;
}
console.log(total / scores.length);