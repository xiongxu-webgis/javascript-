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
class LinkedListNode {
    constructor(element,next){
        this.element = element
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.count = 0
        this.tail = undefined
        this.head = undefined
    }
    push(element){
        const node = new LinkedListNode(element,undefined)
        if(!this.head){
            this.head = node
            this.tail = node
        }
        else{
            this.tail.next = node
            this.tail = node
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

    insert(element,position){
        if(!(position>=0 && position<=this.count)){
            return false
        }
        const node = new LinkedListNode(element)
        if(position===0){
            if(!this.head){
                this.head = node
                this.tail = node
                this.count++
            }
        }
        else if(position===this.count){
            this.push(element)
        }
        else{
            const previous = this.getElementAt(position-1)
            node.next = previous.next
            previous.next = node
        }
        return true
    }
}