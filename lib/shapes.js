class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.shape = 'Generic Shape'; // Default value for demonstration
    }

    // You can add additional methods common to all shapes here

    // Example method:
    displayShapeInfo() {
        console.log(`Shape: ${this.shape}`);
        console.log(`Text: ${this.text}`);
        console.log(`Text Color: ${this.textColor}`);
        console.log(`Shape Color: ${this.shapeColor}`);
    }

    // Each subclass should override this render method
    render() {
        throw new Error('Render method must be implemented by subclasses');
    }
}


class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = 'Circle';
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        width="300px" height="200px">
        <circle cx="50" cy="50" r="50"
        fill="${this.shapeColor}" />
        <style>.text { font-size: 30px; }</style>
        <text x="25" y="50" class="text"
        fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = 'Triangle';
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        width="300px" height="200px">
        <polygon points="50, 0 100,100 0,100"
        fill="${this.shapeColor}" />
        <style>.text { font-size: 30px; }</style>
        <text x="50" y="65" class="text"
        fill="${this.textColor}" text-anchor="middle">${this.text}</text></svg>`;
    }
}
class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shape = 'Square';
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        width="300px" height="200px">
        <rect width="100" height="100"
        fill="${this.shapeColor}" /><style>
        .text { font-size: 30px; }</style>
        <text x="50" y="50" class="text"
        fill="${this.textColor}" text-anchor="middle">${this.text}</text></svg>`;
    }
} 


module.exports = {Circle, Square, Triangle};













