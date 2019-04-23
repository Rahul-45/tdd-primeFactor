primeFact = require('./primeFact');
describe('Prime Factor Kata',()=>{
    test('Prime factor of an integer', ()=>{
        expect(primeFact(1)).toEqual([]);
        expect(primeFact(2)).toEqual([2]);
        expect(primeFact(3)).toEqual([3]);
        expect(primeFact(4)).toEqual([2,2]);
        expect(primeFact(5)).toEqual([5]);
        expect(primeFact(6)).toEqual([2,3]);
        expect(primeFact(7)).toEqual([7]);
        expect(primeFact(8)).toEqual([2,2]);
        expect(primeFact(9)).toEqual([3,3]);
        expect(primeFact(11)).toEqual([11]);

    })

})