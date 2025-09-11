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
        if (this.count == 0) {
            return true
        }
        return false
    }
    toString(){
        if (this.isEmpty()) {
            return ""
        }
        let result = ""
        while(!this.isEmpty()){
            result+=`,${this.pop()}`
        }
        return result.slice(1)
    }
}