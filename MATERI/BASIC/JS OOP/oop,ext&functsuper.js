class peliharaan {
    constructor(name, age) {
        console.log('Parent executed');
        this.name = name;
        this.age = age;
    }
    makan(){
    return `${this.name} lagi makan`;
    
    }
}

class kuing extends peliharaan{
    constructor(name, age, lives) {
        console.log('child executed');
    }

    meong() {
        return 'Meonnggg!';
    }
}

class anjing extends peliharaan {
    gongong(){
        return 'guk guk!!';
    }
}

