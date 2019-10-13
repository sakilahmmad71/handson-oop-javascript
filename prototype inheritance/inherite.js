function Shape() {}

Shape.prototype.duplicate = function() {
    console.log('shaping')
}

function Circel(radius) {
    this.radius = radius
}

Circel.prototype = Object.create(Shape.prototype)

Circel.prototype.draw = function() {
    console.log('drawing')
}

const c = new Circel(10)

console.log(c)