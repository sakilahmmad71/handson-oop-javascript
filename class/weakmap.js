const _radius = new WeakMap()
const _move = new WeakMap()
const PrivateProps = new WeakMap()

class Circle {
    constructor(radius, color) {
        _radius.set(this, radius)
        _move.set(this, () => {
            console.log('Moving somewhere on console and :', this)
        })
        // PrivateProps.set(this, {
        //     color : color,
        //     getColor : () => {
        //         console.log(color.get(this))
        //     }
        // })
    }

    draw() {
        // console.log(PrivateProps.get(this))
        _move.get(this)()
        console.log(_radius.get(this))
        console.log('Drawing something')
    }
}

const c = new Circle(1, 'green')
c.draw()

const keys = Object.keys(c)
console.log(keys)