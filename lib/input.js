// function renderLetters (text) {
//     if(text.length === 3) {
//         return <text x="10" y="10">Hello World!</text>;
//     }
// }

// renderLetters();

function generateLogo(response) {
    if (response.shapes === "Triangle") {
        let triangle = new Triangle (`${this.Triangle}`, `${this.shapeColor}`, `${this.text}`, `${this.textColor}`);
        fs.writeFileSync('example.svg', triangle.getSVG());
}
}