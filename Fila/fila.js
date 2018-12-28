class Queue {
    constructor(){
        this.items = {}
        this.front = 0;
        this.end = 0;
    }

    enterQueue(data){
        this.items[this.end] = data;
        this.end++;
    }

    deQueue(){
        if(this.front === this.end){
            return null;
        } else {
            const data = this.items[this.front];
            delete this.items[this.front];
            this.front++;
            return data;
        };
    }

    getSize(){
        return this.end - this.front;
    }

    isEmpty(){
        if(this.getSize() === 0){
            return true
        } else {
            return false
        }
    }

    peek(){
        if(this.isEmpty() === true){
            return null
        } else {
            return this.items[this.front];
        }
    }

    print(){
        if(this.isEmpty() === true){
            return null
        } else {
            let result = '';
            for(let i = this.front; i < this.end; i++){
                result += this.items[i] + ' '
            };

            return result
        };
    }
};

const queue = new Queue();

queue.enterQueue('hola')
queue.enterQueue('me puedes ayudar?') // Agrega un valor con en la posición en end
queue.enterQueue('Por favor?')

console.log(queue);

console.log(queue.deQueue()) //El valor en front sale

console.log(queue.getSize())
console.log(queue.isEmpty())
console.log(queue.peek())
console.log(queue);
console.log(queue.print())