function showTopic(title) {
    console.log('\n' + '='.repeat(72));
    console.log(title);
    console.log('='.repeat(72));

}

showTopic('Stacks LIFO');
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        return this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length ===0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        return this.items = [];
    }
    toString() {
        return this.items.toString();
    }
}

const orders = new Stack();

orders.push('Chicken');
orders.push('Rice');
orders.push('Coke');
orders.push('Fries');

console.log(`First order to be processed ${orders.peek()}`);
console.log(`Orders to be processed: ${orders.pop()}`);
console.log(`Orders to be processed: ${orders.pop()}`);

console.log(`Remaining Orders: ${orders}`);
console.log(`Remaining size of the order ${orders.size()}`);
console.log(`Is the list empty? ${orders.isEmpty()}`);

showTopic('Queue FIFO');

class Queue {

    constructor() {
        this.items = [];
    }
    enqueue(element) {
        return this.items.push(element);
    }
    dequeue(){
        return this.items.shift();
    }
    front(){
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    toString() {
        return this.items.toString();
    }
}

const waitingRequests = new Queue();

waitingRequests.enqueue('Cleaning');
waitingRequests.enqueue('Cooking');
waitingRequests.enqueue('Massage');
waitingRequests.enqueue('Running');

console.log(`first request to be done ${waitingRequests.front()}`);
const firstRequest = waitingRequests.dequeue();
console.log(`First request: ${firstRequest}`);

showTopic('Priority Queue');

class PriorityQueue {

    constructor() {
        this.items = [];
    }
    enqueue(element, priority) {
        const newItem = {element, priority};
        let added = false;

        for(let i = 0; i < this.items.length; i++) {
            if(newItem.priority < this.items[i].priority) {
                this.items.splice(i , 0, newItem);
                added = true;
                break;
            }
            if(!added) {
                this.items.push(newItem);
            }
        }
    }
    dequeue(){
        return this.items.shift();
    }
    front(){
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    toString() {
        return this.items.toString();
    }
    print() {
        return this.items.forEach((items) => {
            console.log(`request: ${items.elements} priority: ${items.priority}`);
        });
    }
}

const requesteds = new PriorityQueue();

requesteds.enqueue('Fishing', 2);
requesteds.enqueue('Smoking', 3);
requesteds.enqueue('Hunting', 1);
requesteds.enqueue('Buying', 1);

console.log('first action' , requesteds.dequeue());
console.log(`Initial Order`);
requesteds.print();