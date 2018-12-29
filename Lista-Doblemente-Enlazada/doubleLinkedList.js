class Node {
    constructor(data, next, previous){
        this.data = data;
        this.next = next;
        this.previous = previous;
    }
}

class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addToHead(data) {
        const newNode = new Node(data, this.head, null);

        if(this.head){
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode
        }
        this.size ++;
    }

    addToTail(data) {
        const newNode = new Node(data, null, this.tail);

        if(this.tail) {
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.tail = newNode;
            this.head = newNode;
        }
        this.size ++;
    }

    insertAt(data, index) {
        if(index < 0 || index > this.size){
            return null
        } else {
            const newNode = new Node(data, null, null);
            let current = this.head;
            let previous;
            
            if(index === 0) {
                newNode.next = current;
                current.previous = newNode;
                this.head = newNode
            } else {
                for(let i = 0; i < index; i++){
                    previous = current;
                    current = current.next;
                }

                newNode.next = current;
                newNode.previous = previous;
                current.previous = newNode;
                previous.next = newNode;
            }
            this.size ++;
        }
    }

    removeFromHead() {
        const valueToReturn = this.head.data;
        if(!this.head) {
            return null
        } else {
            if(this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.previous = null;
            }
            this.size --;
            return valueToReturn;
        }
    }

    removeFromTail() {
        const valueToReturn = this.tail.data;
        if(!this.tail){
            return null
        } else {
            if(this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail.previous;
                this.tail.next = null
            }
            this.size --;
            return valueToReturn
        }

    }

    removeElement(data){
        let current = this.head;
        let previous = null;

        while(current != null) {
            if(current.data === data){
                if(!previous) {
                    return this.removeFromHead();
                } else if(!current.next) {
                    return this.removeFromTail();
                } else {
                    previous.next = current.next;
                    current.next.previous = previous; 
                }
                this.size --;
                return current.data;
            };
            previous = current;
            current = current.next;
        };

        return null;
    };

    print(){
        let current = this.head;
        let result = '';
        while(current) {
            result+= '|' + current.data + '|' + '<=>';
            current = current.next;
        };
        return result+= '|X|'
    }

    printReverse(){
        let current = this.tail;
        let result = '';
        while(current) {
            result += '|' + current.data + '|' + '<=>';
            current = current.previous
        }
        return result+= '|X|'
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        if(this.size === 0) {
            return true;
        } else {
            return false;
        }
    }
}

const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.addToHead('hola');
doubleLinkedList.addToTail('ya no');
doubleLinkedList.addToHead('pon alarma');
doubleLinkedList.insertAt('soy jorge', 2);
console.log(doubleLinkedList.print())
console.log(doubleLinkedList.getSize())
console.log(doubleLinkedList.printReverse())
console.log(doubleLinkedList)
console.log(doubleLinkedList.removeFromHead())
console.log(doubleLinkedList.removeElement('soy jorge'))
console.log(doubleLinkedList.print())
console.log(doubleLinkedList.getSize())