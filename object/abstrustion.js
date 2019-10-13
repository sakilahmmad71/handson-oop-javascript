function Factory(place, income, cost) {
    this.place = place
    this.income = income
    this.cost = cost
    
    let total = () => {
        return this.income - this.cost
    }

    const licence = true

    this.details = function() {
        return `The factory stayed at ${this.place}, income is ${this.income} and cost is ${this.cost}. the total is ${total()} and this having a licence it's ${licence}`
    }
}

const garment = new Factory('Dhaka', 1000, 509)

console.log(garment.details())