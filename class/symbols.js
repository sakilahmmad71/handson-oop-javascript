const _radius = Symbol()
const _move = Symbol()
const _draw = Symbol()

class Circle {
    constructor(radius, color) {
        this[_radius] = radius
        this.color = color
        this[_move] = function() {
            console.log('moving from one dimention to another dimention')
        }
    }
    [_draw]() {
        console.log('Drawing something that could be awesome')
    }

}

const c = new Circle(1, 'red')

const keys = Object.getOwnPropertySymbols(c)
keys.forEach(key => console.log(c[key]))


