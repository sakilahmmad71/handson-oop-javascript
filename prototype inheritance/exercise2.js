function HtmlElement() {
    this.click = function() {
        console.log('element clicked')
    }
}

HtmlElement.prototype.focus = function() {
    console.log('element focused')
}

function HtmlImageElement(src = undefined) {
    this.src = src
    this.render = function() {
        return console.log(`<img src="${this.src}" >`)
    }
}

function HtmlSelectElement(items = []) {
    this.items = items
    this.render = function() {
        return `
        <select>${this.items.map(item => `
        <option>${item}</option>`).join('')}
        </select>`
    }
}

HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HtmlElement
HtmlImageElement.prototype = new HtmlElement() 
HtmlImageElement.prototype.constructor = HtmlElement


const option = new HtmlSelectElement()
const image = new HtmlImageElement()