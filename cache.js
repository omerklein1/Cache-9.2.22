class LinkedListNode {
    constructor(key, value, next){
        this.key = key
        this.value = value
        this.pre = null
        this.next = next || null
    }
    setPre(pre){
        this.pre = pre
    }

}

class LinkList {
    constructor(){
        this.size = 0;
        this.head = null;
        this.tail = null;    
    }

    insert(key,value, maxItems) {
        this.size === maxItems && this.deleteTail()
        this.size += 1;
        const newNode = new LinkedListNode(key, value, this.head);
        this.head && this.head.setPre(newNode)
        this.head = newNode;
        if (!this.tail) this.tail = newNode;
      }

    find(key){
        var n = this.head;
        while (n != null) {
            if(n.key === key){
                if(n.next) n.next.pre = n.pre
                if(n.pre) n.pre.next = n.next
                this.insert(n.key, n.value)
                return n.value
            }
            n = n.next;
        }
        return undefined
    }

    deleteTail() {
    let currentNode = this.head;
    while (currentNode.next) {
        if (!currentNode.next.next) {
        this.size -= 1;
        currentNode.next = null;
        } else {
        currentNode = currentNode.next;
        }
    }
    this.tail = currentNode;
    }

    print(){
        var n = this.head;
        let obj = {}
        while (n != null) {
            obj[n.key] = n.value
            n = n.next;
        }
        return obj
    }
      
}

class Cache extends LinkList{
    constructor(key,value){
        super()
        this.key = key
        this.value = value
        this.maxItems = 3
    }

    get(key) {
        return this.find(key)
    }

    set(key,value) {
        this.insert(key, value, this.maxItems)
    }

    toObject() {
      return this.print()
    }
}

module.exports = Cache
