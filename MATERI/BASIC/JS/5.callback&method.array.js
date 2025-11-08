//1. forEach
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

angka.forEach(function(el) {
    if(el%2 === 0){
        console.log(el);
    }
});

const animes = [
    {
        title: 'Attack on Titan',
        rating: 90,
    },
    {
        title: 'One Piece',
        rating: 89,
    },
    {
        title: 'Bleach',
        rating: 82,
    },
    {
        title: 'Hunter x Hunter',
        rating: 90,
    },
    {
        title: 'Naruto',
        rating: 84,
    },

];

animes.forEach(function(anime){
    console.log(`${anime.title} - ${anime.rating}/100`)
});

//Map Method
const expression = ['rofl', 'lol', 'omg', 'ttyl']
const capsExpression = expression.map(function(exprs){
    return exprs.toUpperCase();
});

const angkaDouble = angka.map(function(num){
    return num*2;
});

const animeList = animes.map(function(anime){
    return anime.title.toUpperCase();
});

//2. Arrow Function
// perbandingan dengan function expression : 
function perpangkatan(x){
    return x * x;
};

const hasil = perpangkatan(5);

const hasil2 = function(x){
    return x * x;
};

//ini arrow: 
const perpangkatan = (x) => {
    return x * x;
};

const random = () => {
    return Math.floor(Math.random()*1000);
};

//return secara implisit 
const random2 = () => (
    Math.floor(Math.random()*1000)
);

const add = (a,b) => a + b

//3. Settimeout(jeda)
console.log('Hello...');
setTimeout(() => {
    console.log('Apakah ada orang?');
}, 5000);

console.log('Yasudah!');

//4. Setinterval(berulang)
const interval = setInterval(() => {
    console.log(Math.random());
}, 2000); //untuk menghentikannya dengan clearInterval(interval)

//5. FILTER : Memilih data array dengan filter method
const angkaGanjil = angka.filter((n) => {
    return n % 2 === 1;
});

const angkaBaru = angka.filter((n)=>{
    return n < 5;
});

const animeBagus = animes.filter((anime) => anime.rating >= 85);
const judulAnimeBagus = animeBagus.map((anime) => anime.title);
const animeCukupBagus = animes.filter((anime)=> anime.rating < 85);
const animeBaru = animes.filter((anime) => anime.year > 2010);

//6. every : seluruh nilai yang ada pada suatu array memiliki kriteria yang sama
const examScore = [80, 85, 79, 90, 93, 77];
const isGraduate = examScore.every((score) => score >= 75); //true


//7. some : salah satu nilai dalam array memiliki kriteria yang sesuai
const isAnimeListNew = animes.some((anime) => anime.year > 2020); //false, 2010 = true

//8. reduce : melakukan proses sebanyaknya element milik suatu array. nilai baliknya adalah single value

// let total = 0;
// for (let score of examScore){
//     total += score;
// }

const total = examScore.reduce((total, score) => {
    return total + score;
});


const bestAnime = anime.reduce((bestAnime, currAnime) => {
    console.log(bestAnime, currAnime)
    if(currAnime.rating > bestAnime.rating){
        return currAnime;
    }
    return bestAnime;
});

//9. object this di dalam arrow function menggarah pada object global window

const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function (){
        return `${this.firstName} ${this.lastName}`
    },

    panggilNanti: function(){
        setTimeout(function(){
            console.log(this);
                // console.log(this.firstName);
        },3000);
    }
};

