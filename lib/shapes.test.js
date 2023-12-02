// Importing Circle, Square, Triangle classes from ./lib/shapes.js
const { Circle, Square, Triangle } = require("./shapes");

// Circle test with a #FFFF00(yellow) background
describe("Circle test", () => {
  test("test for a circle with a #FFFF00 background", () => {
    const shape = new Circle('abc', 'pink', 'yellow');
    const shapeColor = 'yellow';
    // shape.setColor(shapeColor);
    expect(shape.render()).toEqual(
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300px" height="200px"> <circle cx="50" cy="50" r="50" fill="yellow" /><style>.text { font-size: 30px; }</style><text x="25" y="50" class="text" fill="pink">abc</text></svg>'
    );
  });
});

// Square test with a red background
describe("Square test", () => {
  test("test for a square with a red background", () => {
    const shape = new Square('sss', 'green', 'black');
    const shapeColor = 'red';
    // shape.setColor(shapeColor);
    expect(shape.render()).toEqual(
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300px" height="200px"><rect width="100" height="100" fill="black" /><style>.text { font-size: 30px; }</style><text x="50" y="50" class="text" fill="green" text-anchor="middle">sss</text></svg>'
    );
  });
});

// Triangle test with a pink background
describe("Triangle test", () => {
  test("test for a triangle with a pink background", () => {
    const shape = new Triangle('zzz', 'white', 'purple');
    const shapeColor = 'pink';
    // shape.setColor(shapeColor);
    expect(shape.render()).toEqual(
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300px" height="200px"><polygon points="50,0 100,100 0,100" fill="purple" /><style>.text { font-size: 30px; }</style><text x="50" y="65" class="text" fill="white" text-anchor="middle">zzz</text></svg>'
    );
  });
});
