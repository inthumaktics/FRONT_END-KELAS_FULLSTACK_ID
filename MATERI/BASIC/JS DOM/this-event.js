//Membuat function untuk merandom color :
const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);


    return `rgb(${r}, ${g}, ${b})`;
};

function colorize () {
    this.style.backgroundColor = generateRandomColor();
    this.style.color = generateRandomColor();
}



const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', colorize);
}

const headings = document.querySelectorAll('h1');

for (let heading of headings) {
    heading.addEventListener('click', colorize);
}