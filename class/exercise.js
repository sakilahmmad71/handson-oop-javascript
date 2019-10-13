class Stack {
    constructor(stk = [], count = 0) {
        this.stk = stk
    }

    get count() {
        return this.stk.length
    }
    push(value) {
        return this.stk.push(value)
    }
    pop() {
        if(this.stk <= 0){ 
            throw new Error('Invalid Insertion')
        } else {
            this.stk.pop()
        }
    }
    peek() {
        if(this.stk <= 0){ 
            throw new Error('Invalid Insertion')
        } else {
            return this.stk[this.stk.length - 1]
        }
    }

}

const stack = new Stack()
