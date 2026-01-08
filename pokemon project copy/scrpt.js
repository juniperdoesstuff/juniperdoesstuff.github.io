myBool = true

header = myBool? "myBool is true" : "myBool is false"

console.log(header)

class Rectangle{
    constructor(height, width, color) {
        this.height = height
        this.width = width
        this.color = color
    }
    calculateArea(){
        return this.height * this.width
    }
}

rect1 = new Rectangle(10, 10, "blue")
rect2 = new Rectangle(20, 6, "green")
rect3 = new Rectangle(12, 14, "red")

console.log(rect1.calculateArea())
console.log(rect2.calculateArea())
console.log(rect3.calculateArea())

class Circle{
    constructor(radius) {
        this.radius = radius
    }
    calculateArea(){
        return this.radius * this.radius * 3.14159
    }
}

circle1 = new Circle(10)

console.log(circle1.calculateArea())