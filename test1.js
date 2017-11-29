/**
 * Created by Kathy on 27/11/2017.
 */
// const assert1 = require('assert');
const {should,expect,assert} = require('chai');
var {add,mul} = require('./1.js');


// assert.equal(my.add(2,3),5);
should();
add(2,3).should.equal(5);
expect(add(2,3)).to.be(5);
// assert.equal();