/**
 * Created by Kathy on 27/11/2017.
 */
const {should,expect,assert} = require('chai');
const {add,mul} = require('./1.js');

describe('#math',()=>{
    describe('add',()=>{
        it('should return 5 when 2+ 3',()=>{
            expect(add(2,3),5);
        });
        it('should return 5 when 2+ 3',()=>{
            expect(add(2,-3),-1);
        });
    });
    describe('mul',()=>{
        it('should return 6 when 2* 3',()=>{
            expect(mul(2,3),6);
        });
        it('should return 16 when 2* 8',()=>{
            expect(mul(2,8),16);
        });
    });
})