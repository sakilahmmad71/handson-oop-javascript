function Person(radius) {
    this.radius = radius
    this.move = function() {
        this.draw()
        console.log('moving')
    }
}

Person.prototype.draw = function() {
    console.log('drawing')
}

const man = new Person(10)

// for(let key in man) console.log(key)
const key = Object.keys(man)
console.log(key)