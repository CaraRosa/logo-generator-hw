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
}

class Triangle extends Shape {
    constructor (logoShape, shapeColor, text, textColor) {
        super(logoShape, shapeColor, text, textColor);
    }
    getShape() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
    getText() {
        return `<text x="135" y="100" fill="${this.textColor}">${this.text}</text>`
    }

    getSVG() {
        return `<svg>${this.getShape()}${this.getText()}</svg>`
    }
}

class Square extends Shape {
    constructor (logoShape, shapeColor, text, textColor) {
        super (logoShape, shapeColor, text, textColor);
    }
}

module.exports = {Circle, Triangle, Square};