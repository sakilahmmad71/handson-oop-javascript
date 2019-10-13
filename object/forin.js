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

for(let key in another) {
    if(typeof another[key] !== 'function') {
        console.log('Property : ', another[key])
    } else {
        console.log('function : ', another[key])
    }
}

const keys = Object.keys(another)
console.log(keys)