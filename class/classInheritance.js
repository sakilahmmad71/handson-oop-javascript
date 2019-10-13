class Shape {
    constructor(color) {
        this.color = color
    }
    move() {
        console.log('Moving somewhere')
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color)
        this.radius = radius
    }
    draw() {
        console.log('Drawing something onto the shape')
    }
}

const c = new Circle('red', 50)

c.draw()
c.move()
console.log(c.color)
console.log(c.radius)
