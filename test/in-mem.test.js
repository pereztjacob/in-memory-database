const assert = require('assert');
const imports = require('../lib/in-mem');

const { apple, pear, objArray } = imports;

describe('in-memory db', () => {
    
    it('save', () => {
        assert.equal(apple.save(), apple);
        assert.equal(pear.save(), pear);
    });

    it('get', () => {
        assert.equal(apple.get(), apple);
    });

    it('get all', () => {
        assert.equal(objArray, apple.getAll());
    });

    it('remove', () => {
        apple.remove();
        assert.equal(apple.remove()[1], null);
    });
});