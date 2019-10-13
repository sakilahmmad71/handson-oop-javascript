const circle = {
    radius : 1,
    location : {
        x : 1,
        y : 1
    },
    draw : function() {
        console.log('drawing')
    }
}

const { radius, location : coordinate} = circle
console.log(coordinate)