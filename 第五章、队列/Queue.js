class Queue{
    constructor(){
        this.count = 0
        this.lowerestCount = 0
        this.sym = Symbol()
        this[this.sym] = {}
    }
    enqueue(element){
        this[this.sym][this.count] = element
        this.count++
    }
    isEmpty(){
        return this.count - this.lowerestCount === 0
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        const result = this[this.sym][this.lowerestCount]
        delete this[this.sym][this.lowerestCount]
        this.lowerestCount++
        return result
    }
    size(){
        return this.count - this.lowerestCount
    }
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this[this.sym][this.lowerestCount]
    }
    clear(){
        this.count = 0
        this.lowerestCount = 0
        this[this.sym] = {}
    }
    toString(){
        if(this.isEmpty()){
            return ''
        }
        let objString = `${this[this.sym][this.lowerestCount]}`
        for(let i = this.lowerestCount + 1; i < this.count; i++){
            objString = `${objString},${this[this.sym][i]}`
        }
        return objString
    }
}

class Deque extends Queue{
    constructor(){
        super()
    }
    addfront(element){
        if(this.isEmpty()){
            this.enqueue(element)
            return
        }
        this.lowerestCount--
        this[this.sym][this.lowerestCount] = element
    }
    addBack(element){
        this.enqueue(element)
    }
    removeFront(){
        return this.dequeue()
    }
    removeBack(){
        if(this.isEmpty()){
            return undefined
        }
        this.count--
        const result = this[this.sym][this.count]
        delete this[this.sym][this.count]
        return result
    }
    peekFront(){
        return this.peek()
    }
    peekBack(){
        if(this.isEmpty()){
            return undefined
        }
        return this[this.sym][this.count - 1]
    }
}

export { Queue, Deque }