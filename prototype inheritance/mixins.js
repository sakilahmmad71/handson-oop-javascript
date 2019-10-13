function mixin(target, ...sources) {
    Object.assign(target, ...sources)
}

const canEat = {
    eat : function() {
        console.log('eating')
    }
}

const canWalk = {
    walk : function() {
        console.log('walking')
    }
}

const canSwim = {
    swim : function() {
        console.log('swiming')
    }
}

function Person() {}
// Object.assign(Person.prototype, canEat, canWalk)

function Goldfish() {}
// Object.assign(Goldfish.prototype, canEat, canSwim)

mixin(Person.prototype, canWalk, canEat)
mixin(Goldfish.prototype, canSwim, canEat)

const person = new Person()
const goldfish = new Goldfish()

console.log(person)
console.log(goldfish)

person.swim()
