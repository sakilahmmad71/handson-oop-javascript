function Circle(radius) {
    this.radius = radius
    this.draw = function() {
        console.log('draw something.')
    }
}

const another = new Circle(10)

another.location = {
    latitude : 150,
    longitude : 200
}

// We can use bracket notation for dynamically access properties.
another['place'] = {
    city : 'Dhaka',
    country : 'Bangladesh'
}

delete another['radius']

console.log(another)