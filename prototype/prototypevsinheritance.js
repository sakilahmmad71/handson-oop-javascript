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
const woman = new Person(20)

console.log(man)
console.log(woman)

man.move()
woman.move()
