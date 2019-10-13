class Circle {
    constructor(radius = undefined) {
        this.radius = radius

        // this is a original object method
        this.move = function() {
            console.log('it will show into direct object method')
        }
    }

    // instance method it will show in prototype
    draw() {
        console.log('it will show into prototype object method')
    }

    // static method which will available only this class not instances.
    static parse(str = '') {
        console.log('no instance caontains this method')
    }
}


const c = new Circle()

c.draw()
c.move()
Circle.parse()
