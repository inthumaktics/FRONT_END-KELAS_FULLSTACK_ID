class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.b = b;
        this.g = g;
        this.name = name;

    }

    innerRGB (){
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }
    colorName(){
        console.log(`The color name is ${this.name}`);
    }
    rgb() {
        return `rgb(${this.innerRGB})`;
    }
    rgba(a = 1.0){
        return `rgba(${this.innerRGB}, ${a})`;
    }
    hex() {
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 6) + (g << 8)+b).toString(16).slice(1);
    }
};

//Lanjutan