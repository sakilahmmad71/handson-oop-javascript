function Extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Shape(color) {
    this.color = color
}

Shape.prototype.duplicate = function() {
    console.log('shaping')
}

function Circel(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}

Extend(Circel, Shape)

Circel.prototype.draw = function() {
    console.log('drawing')
}

function Square(size, color) {
    Shape.call(this, color)
    this.size = size
}

Square.prototype.build = function() {
    console.log('square builded')
}

Extend(Square, Shape)

const s = new Square(20, 'blue')
const c = new Circel(10, 'green')

console.log(c)
console.log(s)