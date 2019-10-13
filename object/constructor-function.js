function Circle(radius) {
    this.radius = radius
    this.location = {
        x : 1,
        y : 1
    }
    this.draw = function() {
        console.log('draw')
    }
}

const another = new Circle(1)

const { location : { x, y} } = another

console.log(x)
another.draw()

// Constructor function cannot be arrow functions. this + new = constructor function