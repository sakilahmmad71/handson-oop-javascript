class Circel {
    constructor(radius) {
        this.radius = radius
        this.move = function() {
            console.log('Moving somewhere')
        }
    }

    draw() {
        console.log('Drawing something')
    }
}

const c = new Circel(1)