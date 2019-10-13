class Shape {
    constructor(color) {
        this.color = color
    }
    move() {
        console.log('Moving the shape one dimention to another dimention')
    }
    draw() {
        console.log('Drawing on the board')
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color)
        this.radius = radius
    }
    draw() {
        super.draw()
        console.log('Drawing something extra purticular things')
    }
}

const c = new Circle('Yellow', 100)
c.draw()