const Person = { name : "sakil" }

const property = Object.getOwnPropertyNames(Person)

Object.defineProperty(Person, 'name', {
    writable : false,
    enumerable : false,
})

const proto = Object.getPrototypeOf(Person)

console.log(proto)