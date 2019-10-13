function Extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Circel() {
}

Circel.prototype.duplicate = function() {
    console.log('Duplicate circels')
}

function Shape() {
}

Extend(Shape, Circel)

Shape.prototype.duplicate = function() {
    console.log('Duolicate shapes')
}

const shapes = [
    new Circel(),
    new Shape()
]

for(let shape of shapes) {
    shape.duplicate()
}