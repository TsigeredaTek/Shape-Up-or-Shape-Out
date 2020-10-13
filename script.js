const shapeContainer = document.getElementById("shape-container"),
    rectangleBtn = document.getElementById("recBtn"),
    squareBtn = document.getElementById("squareBtn"),
    circleBtn = document.getElementById("circleBtn"),
    triangleBtn = document.getElementById("triangleBtn");


class Shape {
    constructor() {
        this.shape = document.createElement("div");
        this.shape.classList.add("shape");
        this.shape.addEventListener("click", () => this.describe());
        this.shape.addEventListener("dbclick", () => shapeContainer.removeChild(this.shape));
        shapeContainer.appendChild(this.shape);
        this.shape.style.top = `${Math.floor(Math.random() * 600)}px`;
        this.shape.style.left = `${Math.floor(Math.random() * 600)}px`;
    }
}

describe() {
    document.getElementById("shape-name-info").innerText = `ShapeName: ${this.shape.shapeName}`;
    document.getElementById("shape-width-info").innerText = `Width: ${this.shape.width}`;
    document.getElementById("shape-height-info").innerText = `Height: ${this.shape.height}`;
    document.getElementById("shape-radius-info").innerText = `Radius: ${this.shape.radius}`;
    document.getElementById("shape-area-info").innerText = `Area: ${this.shape.shape.area}`;
    document.getElementById("shape-perimeter-info").innerText = `Perimeter: ${this.shape.perimeter}`;
    
}

class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
        this.shape.shapeName = "Rectangle";
        this.shape.style.height = `${height}px`;
        this.shape.style.width = `${width}px`;
        this.shape.style.backgroundColor = "green";
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
        this.shape.style.height = `${this.sideLength}px`;
        this.shape.style.width = `${this.sideLength}px`;
        this.shape.style.backgroundColor = "red";
        this.shape.style.top = `${Math.floor(Math.random() * 600)}px`;
        this.shape.style.left = `${Math.floor(Math.random() * 600)}px`;
        this.addToDOM();
    }
}

class Circle extends Shape {
    constructor(radius) {
        this.radius = radius;
        this.shape.classList.add("circle");
        this.shape.style.height = `${2 * this.radius}px`;
        this.shape.style.width = `${2 * this.radius}px`;
        this.shape.style.backgroundColor = "purple";
    }
}

class Triangle extends Shape {
    constructor(height) {
        super();
        this.height = height;
        this.shape.classList.add("triangle");
        this.shape.style.borderTop = `${this.height}px solid transparent`;
        this.shape.style.borderRight = `${this.height}px solid yellow`;
    }
}

rectangleBtn.addEventListener("click", () => new Rectangle(document.getElementById("rec-width").value, document.getElementById("rec-height").value));
squareBtn.addEventListener("click", () => new Square(document.getElementById("square-length").value));
circleBtn.addEventListener("click", () => new Circle(document.getElementById("circle-radius").value));
triangleBtn.addEventListener("click", () => new Triangle(document.getElementById("triangle-height").value));