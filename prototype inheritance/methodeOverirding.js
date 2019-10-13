function Extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Shape(color) {
    this.color = color
}

Shape.prototype.duplicate = function() {
    console.log('Duplicate')
}

function Circel(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}

Extend(Circel, Shape)

Circel.prototype.draw = function() {
    console.log('Drawing')
}

Circel.prototype.duplicate = function() {
    Shape.prototype.duplicate.call(this)
    console.log('New Duplicate')
}

const c = new Circel(100, 'biolet')

c.duplicate()
console.log(c)