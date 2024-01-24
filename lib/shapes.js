class Shape {
    constructor (logoShape, shapeColor, text, textColor) {
        this.logoShape = logoShape;
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
}

class Circle extends Shape {
    constructor (logoShape, shapeColor, text, textColor) {
        super(logoShape, shapeColor, text, textColor);

    }

    setColor(color) {
        this.shapeColor = color;
    }

    getShape() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}"/>`;
    }
    getText() {
        return `<text x="15" y="77" fill="${this.textColor}">${this.text}</text>`;
    }
    getSVG() {
        return `<svg>${this.getShape()}${this.getText()}</svg>`;
    }

    render() {
        return `${this.getShape()}`;
    }
}

class Triangle extends Shape {
    constructor (logoShape, shapeColor, text, textColor) {
        super(logoShape, shapeColor, text, textColor);

    }

    setColor(color) {
        this.shapeColor = color;
    }

    getShape() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
    getText() {
        return `<text x="135" y="120" fill="${this.textColor}">${this.text}</text>`
    }

    getSVG() {
        return `<svg>${this.getShape()}${this.getText()}</svg>`;
    }

    render() {
        return `${this.getShape()}`;
    }
}

class Square extends Shape {
    constructor (logoShape, shapeColor, text, textColor) {
        super (logoShape, shapeColor, text, textColor);
    }

    setColor(color) {
        this.shapeColor = color;
    }

    getShape() {
        return `<rect x="50" height="200" width="200" fill="${this.shapeColor}"/>`;
    }
    getText() {
        return `<text x="135" y="100" fill="${this.textColor}">${this.text}</text>`;
    }
    getSVG() {
        return `<svg>${this.getShape()}${this.getText()}</svg>`
    }

    render() {
        return `${this.getShape()}`;
    }
}

module.exports = {Circle, Triangle, Square};