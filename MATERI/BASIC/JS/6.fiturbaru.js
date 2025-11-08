//1. Default Value Parameter
function lemparDadu(sisi = 6){
    return Math.floor(Math.random()*sisi)+1;
}

function sapa(name, msg = 'Selamat ngoding'){
    console.log(`${name} ${msg}`)
} //memberi default value pada parameter funct

//2. Spread Operator pada Function
const angka = [1, 2, 3, 4, 5]
Math.max(angka); //ini akan NaN karena tidak bisa membaca array
Math.max(...angka); //5

//merge array dengan spread operator
const angkaa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const nama = ['Aku', 'Bu', 'Cak', 'De'];

const campuran = [...angka, ...nama];


//merge object dengan spread operator
const user = {
    name : 'john',
    email : 'Johnd@doe.com',
    role : 'Admin'

};

const credential = {
    password: 'password',
    token: 'aheidjaie1233',
};

const userBaru = {...user, ...credential};

//3. Rest param
const namaMenang = ['Asa', 'Buna', 'Cizy', 'Dalua', 'Esta', 'Frasa', 'Gani']

const pemenang = (gold, silver, bronze, ...lain) => {
    console.log(`Medali emas diraih : ${gold}`)
    console.log(`Medali emas diraih : ${silver}`)
    console.log(`Medali emas diraih : ${bronze}`)
    console.log(`Medali emas diraih : ${lain}`)
};

//4. Destructing versi array
const [gold, silver, bronze, ...peserta] = namaMenang;

//versi object
const {name, email, phone = '012345'} = user;

//buat parameter pada function
const userAndrole = ({name, role}) => {
    return `${name} ${role}`
};

const anime = animes.map(({title, year, rating}) => {
    return `${title} (${year}) rating ${rating}`
});