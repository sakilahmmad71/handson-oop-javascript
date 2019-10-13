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

Circel.prototype = Object.create(Shape.prototype)
Circel.prototype.constructor = Circel

Circel.prototype.draw = function() {
    console.log('drawing')
}

const c = new Circel(10, 'green')

console.log(c)