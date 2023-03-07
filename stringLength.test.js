const stringLength = require('./stringLength');

test('returns the length of string', () =>{
    // arrange 
    const input  = 'mohsen';
    const expectedResult = 6;

    // ast 
    const result = stringLength(input);

    //  assert
    expect(result).toBe(expectedResult)
})