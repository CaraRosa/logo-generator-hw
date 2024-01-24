const { Triangle, Circle, Square } = require("./shapes");

// Set up instances for testing
const triangleShape = new Triangle();
triangleShape.setColor("blue");

const circleShape = new Circle();
circleShape.setColor("green");

const squareShape = new Square();
squareShape.setColor("purple");

// Run tests
test('Triangle rendering', () => {
  expect(triangleShape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Circle rendering', () => {
  expect(circleShape.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="green"/>');
});

test('Square rendering', () => {
  expect(squareShape.render()).toEqual('<rect x="50" height="200" width="200" fill="purple"/>');
});
