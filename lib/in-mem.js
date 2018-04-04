const shortid = require('shortid');

objArray = [];

class Store {
    constructor(fish, shark) {
        this.fish = fish;
        this.shark = shark;
    }
    
    save(obj) {
        !this.id ? this.id = shortid.generate() : null;
        objArray.push(this);
        return this;
    }

    get(identity) {
        let obj = objArray.find(obj => { return obj.id === this.id; });
        return obj;
    }

    getAll() {
        return objArray;
    }

    remove(identity) {
        objArray = objArray.filter(obj => {
            return obj.id !== apple.id;
        });
        console.log('object array: ', objArray);
        return objArray;
    }
}

var apple = new Store('parrot', 'tiger');
var pear = new Store('cat', 'bull');

module.exports = {apple, pear, objArray};