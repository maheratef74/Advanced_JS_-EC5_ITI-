function checkIfNumberIsValid(inputValue, variableName) {
    if (typeof inputValue !== "number" || inputValue <= 0) {
        throw new TypeError(`${variableName} must be a positive number`);
    }
}

function BaseShape() {
    if (new.target === BaseShape) {
        throw new Error("Cannot create instance from abstract Shape class");
    }
}

function Rectangle(rectangleWidth, rectangleHeight) {
    BaseShape.call(this);

    checkIfNumberIsValid(rectangleWidth, "Width");
    checkIfNumberIsValid(rectangleHeight, "Height");

    let privateWidth = rectangleWidth;
    let privateHeight = rectangleHeight;

    Object.defineProperty(this, "width", {
        get() {
            return privateWidth;
        },
        set(newValue) {
            checkIfNumberIsValid(newValue, "Width");
            privateWidth = newValue;
        },
        enumerable: true,
    });

    Object.defineProperty(this, "height", {
        get() {
            return privateHeight;
        },
        set(newValue) {
            checkIfNumberIsValid(newValue, "Height");
            privateHeight = newValue;
        },
        enumerable: true,
    });
}

Rectangle.prototype = Object.create(BaseShape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function () {
    return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
    return 2 * (this.width + this.height);
};

Rectangle.prototype.toString = function () {
    return `Rectangle:
    Width: ${this.width}
    Height: ${this.height}
    Area: ${this.area()}
    Perimeter: ${this.perimeter()}`;
};

Rectangle.prototype.valueOf = function () {
    return this.area();
};

function Square(sideLength) {
    Rectangle.call(this, sideLength, sideLength);
    Square.count++;
}

Square.count = 0;

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.toString = function () {
    return `Square:
    Side: ${this.width}
    Area: ${this.area()}
    Perimeter: ${this.perimeter()}
    Total Squares: ${Square.count}`;
};

const firstRectangle = new Rectangle(10, 6);
const secondRectangle = new Rectangle(5, 7);

console.log(firstRectangle.toString());
console.log(secondRectangle.toString());

const firstSquare = new Square(4);
const secondSquare = new Square(8);

console.log(firstSquare.toString());
console.log(secondSquare.toString());

console.log("Sum:", firstRectangle + secondRectangle); 
console.log("Difference:", firstRectangle - secondRectangle);
console.log("Squares Count:", Square.count);