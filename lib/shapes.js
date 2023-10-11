class Shape {
    constructor (logoShape, shapeColor) {
        this.logoShape = logoShape;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor (logoShape, shapeColor, radius, xPosition, yPosition) {
        super(logoShape, shapeColor);
        this.radius = radius;
        this.xPosition = xPosition;
        this.yPosition = yPosition;

    }
}

class Triangle extends Shape {
    constructor (logoShape, shapeColor, height, base, denominator) {
        super(logoShape, shapeColor);
        this.height = height;
        this.base = base;
        this.denominator = denominator;
    }
}

class Square extends Shape {
    constructor (logoShape, shapeColor, sideOne, sideTwo) {
        super (logoShape, shapeColor);
        this.sideOne = sideOne;
        this.sideTwo = sideTwo;
    }
}