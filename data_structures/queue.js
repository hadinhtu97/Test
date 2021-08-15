// First-In First-Out

class Queue {
    constructor() {
        this.collection = {};
        this.start = 0;
        this.end = 0;
    }
    print() {
        console.log(this.collection);
    }
    enqueue(val) {
        this.collection[this.end++] = val;
    }
    dequeue() {
        return this.collection[this.start++];
    }
    front() {
        return this.collection[this.start];
    }
    size() {
        return this.end - this.start;
    }
    isEmpty() {
        return this.size() === 0;
    }
}

function PriorityQueue() {
    this.collection = [];
    this.printCollection = function () {
        console.log(this.collection);
    };
    this.enqueue = function (newitem) {
        if (this.isEmpty()) {
            return this.collection.push(newitem);
        }

        this.collection = this.collection.reverse();
        var found_index = this.collection.findIndex(function (item) {
            return newitem[1] >= item[1];
        });
        if (found_index === -1) {
            this.collection.push(newitem);
        } else {
            this.collection.splice(found_index, 0, newitem);
        }
        this.collection = this.collection.reverse();
    };
    this.dequeue = function () {
        if (!this.isEmpty()) {
            return this.collection.shift()[0];
        } else {
            return "The queue is empty.";
        }
    };
    this.size = function () {
        return this.collection.length;
    };
    this.front = function () {
        return this.collection[0][0];
    };
    this.isEmpty = function () {
        return this.size() > 0 ? false : true;
    };
}

class CircularQueue {
    constructor(size) {
        this.queue = [];
        this.read = 0;
        this.write = 0;
        this.max = size - 1;

        while (size > 0) {
            this.queue.push(null);
            size--;
        }
    }

    print() {
        return this.queue;
    }

    enqueue(item) {
        if (this.queue[this.write] === null) {
            this.queue[this.write++] = item;

            if (this.write > this.max) this.write = 0;
            return item;
        }
        return null;
    }

    dequeue() {
        if (this.queue[this.read] != null) {
            let item = this.queue[this.read];
            this.queue[this.read++] = null;
            if (this.read > this.max) this.read = 0;
            return item;
        }
        return null;
    }
}
