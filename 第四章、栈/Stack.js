export default class Stack {
    #sym
    constructor() {
        this.#sym = Symbol()
        this[this.#sym] = {}
        this.count = 0
    }
    push(element){
        this[this.#sym][this.count]=element
        this.count++
    }
    pop(){
        this.count--
        let value = this[this.#sym][this.count]
        delete this[this.#sym][this.count]
        return value
    }
    peek(){
        return this[this.#sym][this.count-1]
    }
    size(){
        return this.count - 1
    }
    isEmpty(){
        return this.size === 0
    }
    toString(){
        if (this.isEmpty()) {
            return ""
        }
        let result = ""
        let index = this.count
        while(index>0){
            result+=`,${this[this.#sym][index-1]}`
            index--
        }
        return result.split("").slice(1).reverse().join("")
    }
}