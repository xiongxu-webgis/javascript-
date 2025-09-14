/*
 * @Author: xiongxu-webgis
 * @Email: 1833104160@qq.com
 * @Date: 2025-09-12 17:05:50
 * @LastEditors: xiongxu-webgis
 * @LastEditTime: 2025-09-12 17:57:56
 * @FilePath: \javascript-\第六章、链表\LinkedList.js
 * @Description: 
 * 
 * Copyright (c) 2025 by 1833104160@qq.com, All Rights Reserved. 
 */

let defaultEquals =(a,b)=>{
    return a===b
}
class LinkedListNode {
    constructor(element,next){
        this.element = element
        this.next = next
    }
}

class LinkedList{
    constructor(compareFn = defaultEquals){
        this.count = 0
        this.head = null
        this.equals = compareFn
    }
    push(element){
        const node = new LinkedListNode(element,undefined)
        if(this.count === 0){
            this.head = node
        }
        else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.count++
    }

    getElementAt(index){
        if(!(index>=0 && index<this.count)){
            return undefined
        }
        let current = this.head
        for(let i=0;i<index-1;i++){
            current = current.next
        }
        return current
    }

    insert(element, position){
        if(!(position>=0 && position<=this.count)){
            return false
        }
        const node = new LinkedListNode(element)
        if(position===0){
            node.next = this.head
            this.head = node
            this.count++
        }
        else if(position===this.count){
            this.push(element)
        }
        else{
            const previous = this.getElementAt(position-1)
            node.next = previous.next
            previous.next = node
            this.count++
        }
        return true
    }

    indexOf(element){
        if(this.count == 0){
            return undefined
        }
        let current = this.head
        for(let i=0;i<this.count;i++){
            if(this.equals(current.element, element)){
                return i
            }
            current = current.next
        }
        return -1
    }

    removeAt(index){
        if(!(index>=0 && index<this.count)){
            return undefined
        }
        let privious = null
        let current = this.head
        for(let i=0;i<this.index;i++){
            privious = current
            current = current.next
        }
        if(!privious){
            this.head=current.next
        }
        privious.next = current.next
        this.count--
        return current.element
    }
    remove(element){
        let index = indexOf(element)
        this.removeAt(index)
        return index
    }
    size(){
        return this.count
    }
    isEmpty(){
        return this.size === 0
    }
    getHead(){
        return this.head
    }
    toString(){
        if(!this.head){
            return ""
        }
        let string = `${this.head.element}`
        let current = this.head.next
        for(let i =1;i<this.count;i++){
            string+=`,${current}`
            current = current.next
        }
        return string
    }

}