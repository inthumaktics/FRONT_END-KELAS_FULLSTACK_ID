//CALL STACK
const perkalian = (x, y) => x*y;

const akar = (x) => perkalian (x,x);

const pythagoras = (a, b, c) => {
    return akar(a) + akar(b) === akar(c);
};

pythagoras(3, 4, 5);