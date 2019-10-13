let number = 10

function increase(number) {
    return number++
}

increase(number)
console.log('number : ', number)

// VS

let obj = { value : 10 }

function increaseObj(number) {
    return obj.value++
}

increaseObj(obj)
console.log('object : ', obj.value)