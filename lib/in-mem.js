const shortid = require('shortid');

let objArray = [];

class Store {
    constructor(fish, shark) {
        this.fish = fish;
        this.shark = shark;
    }
    
    save() {
        !this.id ? this.id = shortid.generate() : null;
        objArray.push(this);
        return this;
    }

    get() {
        let obj = objArray.find(obj => { return obj.id === this.id; });
        return obj;
    }

    getAll() {
        return objArray;
    }

    remove() {
        objArray = objArray.filter(obj => {
            return obj.id !== apple.id;
        });
        return objArray;
    }
}

var apple = new Store('parrot', 'tiger');
var pear = new Store('cat', 'bull');

module.exports = { apple, pear, objArray };