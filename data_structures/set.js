// A set is like an array, but it cannot contain duplicate values.
// The typical use for a set is to simply check for the presence of an item.
// We can see how the ES6 Set object works in the example below:
const set1 = new Set([1, 2, 3, 5, 5, 2, 0]);
console.log(set1);
// output: {1, 2, 3, 5, 0}
console.log(set1.has(1));
// output: true
console.log(set1.has(6));
// output: false

class Set {
    constructor() {
        this.dictionary = {};
        this.length = 0;
    }


    has(element) {
        return this.dictionary[element] !== undefined;
    }

    values() {
        return Object.values(this.dictionary);
    }

    add(element) {
        if (!this.has(element)) {
            this.dictionary[element] = element;
            this.length++;
            return true;
        } else {
            return false;
        }
    }

    remove(element) {
        if (this.has(element)) {
            delete this.dictionary[element];
            this.length--;
            return true;
        } else {
            return false;
        }
    }

    size() {
        return this.length;
    }

    union(set) {
        let newSet = new Set();
        for (let val of [...this.values(), ...set.values()]) {
            newSet.add(val)
        }
        return newSet
    }

    intersection(set) {
        let newSet = this.union(set);
        newSet.values().forEach(val => {
            if (!(this.has(val) && set.has(val))) {
                newSet.remove(val)
            }
        })
        return newSet
    }

    difference(set) {
        let newSet = new Set();
        this.values().forEach(val => {
            if (!set.has(val)) {
                newSet.add(val)
            }
        })
        return newSet
    }

    isSubsetOf(set) {
        let x = 0;
        this.values().forEach(val => {
            if (set.has(val)) {
                x++
            }
        })
        return x == this.length
    }
}
