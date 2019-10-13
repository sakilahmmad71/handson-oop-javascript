function People(colour) {
    this.colour = colour

    let height = 'medium'
    function peopleDetails() {
        return height
    }

    let location = {
        x : 1,
        y : 1
    }

    this.getHeight = function() {
        return peopleDetails()
    }

    this.details = function() {
        peopleDetails()
    }

    Object.defineProperty(this, 'location', {
        get : function() {
            return location
        }
    })
}

const man = new People('black')

console.log(man.getHeight())
console.log(man.location)