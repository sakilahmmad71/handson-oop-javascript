const _radius = new WeakMap()
class Circel {
    constructor(radius) {
        _radius.set(this, radius)
    }

    get radius() {
        return _radius.get(this)
    }
    set radius(value) {
        if(value <= 0) throw new Error('Negative value cannot set')
        _radius.set(this, value)
    }
}

const c = new Circel(10)

console.log(c.radius)
c.radius = 100
console.log(c.radius)