'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ================================================================
// PART A: STACK
// ================================================================

class Stack {

  // Create the internal storage for the stack.
  constructor() {
    this.items = [];
  }

  // Add an element to the top of the stack.
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element of the stack.
  pop() {
    return this.items.pop();
  }

  // Return the top element without removing it.
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty.
  isEmpty() {
    return this.items.length === 0; 
  }

  // Return the number of elements in the stack.
  size() {
    return this.items.length;
  }

  // Convert all stack elements into a string.
  toString() {
    return this.items.join(', ');
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

// Add the required actions to the stack.
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');

// Display the top action, remove the latest action,
// then display the remaining actions and stack size.
console.log('Top Action: ' , actionHistory.peek());
console.log('Undo Action: ' , actionHistory.pop());
console.log('Remaining Actions: ' , actionHistory.toString());
console.log('Current Stack Size:' , actionHistory.size());


// ================================================================
// PART B: QUEUE
// ================================================================

class Queue {

  constructor() {
    this.items = [];
  }

  // Add an element to the back of the queue.
  enqueue(element) {
    return this.items.push(element);
  }

  // Remove and return the element at the front of the queue.
  dequeue() {
    return this.items.shift();
  }

  // Return the front element without removing it.
  front() {
    return this.items[0];
  }

  // Check if the queue is empty.
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of elements in the queue.
  size() {
    return this.items.length;
  }

  // Convert all queue elements into a string.
  toString() {
    return this.items.join(', ');
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// Add the four required requests to the queue.
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');

// Display the request at the front of the queue.
console.log('Next Request: ', waitingRequests.front());

// Process the first two requests in the queue.
console.log('Processed: ' , waitingRequests.dequeue());
console.log('Processed: ' , waitingRequests.dequeue());

// Display the remaining requests and the current queue size.
console.log('Remaining Requests: ' , waitingRequests.toString());
console.log('Queue Size: ' , waitingRequests.size());


// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================

class PriorityQueue {

  // Create the internal storage for the priority queue.
  constructor() {
    this.items = [];
  }

  // Create a request with its priority and insert it
  // in the correct priority order.
  enqueue(request, priority) {
    const newItem = {request, priority};
    let added = false;

    // Find the correct position based on priority.
    for(let i = 0; i < this.items.length; i++) {
      if(newItem.priority < this.items[i].priority) {
        this.items.splice(i, 0, newItem);
        added = true;
        break;
      }
    }

    // Add the request to the end when no earlier position was found.
    // This also keeps requests with equal priorities in arrival order.
    if(!added) {
      this.items.push(newItem);
    }
  }

  // Remove and return the highest-priority request.
  dequeue() {
    return this.items.shift();
  }

  // Return the number of requests in the priority queue.
  size() {
    return this.items.length;
  }

  // Display every request together with its priority.
  print() {
    this.items.forEach((items) => {
      console.log(`${items.request}, Priority ${items.priority}`)
    });
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

// Add the four required requests with their priorities.
urgentRequests.enqueue('Ticket #301 - Install Browser' , 3);
urgentRequests.enqueue('Ticket #302 - Server Offline' , 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure' , 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);

// Display the initial priority order.
console.log('Initial Priority Order:');
urgentRequests.print();

// Process the first request in the priority queue.
const processedUrgent = urgentRequests.dequeue();

console.log(
  'Processed Priority Request:',
  `${processedUrgent.request}, Priority ${processedUrgent.priority}`
);

// Display the remaining priority requests.
console.log('Remaining Priority Request:');
urgentRequests.print();


// ================================================================
// PART D: LINKED LIST
// ================================================================

class Node {

  // Create a node containing an element and a reference
  // to the next node.
  constructor(element) {
    this.element = element;
    this.next = null;
  }

}

class LinkedList {

  // Create an empty linked list.
  constructor() {
    this.length = 0;
    this.head = null;
  }

  // Add a new node at the end of the list.
  append(element) {
    const node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {

      // Start at the head and move through the list
      // until the last node is reached.
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = node;
    }

    this.length++;
  }

  // Insert a new node at the given position.
  insert(position, element) {
    if (position < 0 || position > this.length) {
      return false;
    }

    const node = new Node(element);

    // Insert the new node at the beginning of the list.
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {

      // Find the correct position by moving through the list.
      let previous = null;
      let current = this.head;
      let index = 0;

      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      // Connect the new node between previous and current.
      node.next = current;
      previous.next = node;
    }

    this.length++;
    return true;
  }

  // Remove and return the element at the given position.
  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = this.head;

    // Remove the first node by moving head to the next node.
    if (position === 0) {
      this.head = current.next;
    } else {

      // Find the node at the requested position
      // and keep track of the node before it.
      let previous = null;
      let index = 0;

      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      // Remove the current node by connecting previous
      // directly to the node after current.
      previous.next = current.next;
    }

    this.length--;
    return current.element;
  }

  // Search through the list and return the index
  // of the given element.
  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.element === element) {
        return index;
      }

      current = current.next;
      index++;
    }

    // Return -1 when the element is not found.
    return -1;
  }

  // Remove a node by its value using indexOf and removeAt.
  remove(element) {
    const position = this.indexOf(element);
    return this.removeAt(position);
  }

  // Check if the linked list is empty.
  isEmpty() {
    return this.length === 0;
  }

  // Return the number of nodes in the linked list.
  size() {
    return this.length;
  }

  // Traverse the list and convert all elements into a string.
  toString() {
    let current = this.head;
    const elements = [];

    while (current !== null) {
      elements.push(current.element);
      current = current.next;
    }

    return elements.join(', ');
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

// Add the three required requests to the end of the list.
completedRequests.append('Ticket #401 - Account Activated');
completedRequests.append('Ticket #402 - Printer Connected');
completedRequests.append('Ticket #403 - Antivirus Updated');

// Insert Ticket #400 at the beginning of the list.
completedRequests.insert(0, 'Ticket #400 - Computer Diagnosed');

// Insert Ticket #405 at the end of the list.
completedRequests.insert(
  completedRequests.size(),
  'Ticket #405 - Browser Updated'
);

// Display the complete linked list.
console.log('Complete List:', completedRequests.toString());

// Search for Ticket #402 and display its position.
console.log(
  'Index of Ticket #402:',
  completedRequests.indexOf('Ticket #402 - Printer Connected')
);

// Remove the item at position 1 and remove Ticket #403 by value.
console.log('Removed at Position 1:', completedRequests.removeAt(1));
console.log(
  'Removed by Value:',
  completedRequests.remove('Ticket #403 - Antivirus Updated')
);

// Display the final linked list and its size.
console.log('Final List:', completedRequests.toString());
console.log('Final Size:', completedRequests.size());