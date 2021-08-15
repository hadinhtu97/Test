// add accepts a key, value pair to add to the map.
// remove accepts a key and removes the associated key, value pair
// get accepts a key and returns the stored value
// has accepts a key and returns true if the key exists or false if it doesn't.
// values returns an array of all the values in the map
// size returns the number of items in the map
// clear empties the map

const Map = function () {
    this.collection = {};
    this.add = (key, value) => {
        if (this.collection[key] == undefined) {
            this.collection[key] = value
        }
        return this.collection
    }
    this.remove = (key) => {
        if (this.collection[key]) {
            delete this.collection[key]
        }
    }
    this.get = (key) => {
        if (this.collection[key]) {
            return this.collection[key]
        }
    }
    this.has = (key) => {
        return this.collection[key] == undefined ? false : true
    }
    this.values = () => {
        return Object.values(this.collection)
    }
    this.size = () => {
        return Object.keys(this.collection).length
    }
    this.clear = () => {
        Object.keys(this.collection).forEach(key => {
            delete this.collection[key]
        })
    }
};
