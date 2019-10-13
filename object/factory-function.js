const createCircel = (radius) => {
    return {
        radius,
        location : {
            x : 1,
            y : 1
        },
        draw : function() {
            console.log("draw")
        }
    }
}

const newCircel = createCircel(10)
newCircel.draw()