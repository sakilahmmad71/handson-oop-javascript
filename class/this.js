class Circle {
    draw() {
        console.log(this)
    }
}

const c = new Circle()
c.draw()
const draw = c.draw
console.log(draw()) 

// javascript class uses 'use strict' by default.