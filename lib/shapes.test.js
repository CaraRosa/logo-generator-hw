const triangleShape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const circleShape = new Circle();
circleShape.setColor("green");
expect(circleShape.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="green">');

const squareShape = new Square();
shape.setColor("purple");
expect(shape.render()).toEqual('<rect x="50" height="200" width="200" fill="purple">');

module.exports = { Circle, Square, Triangle }