const reverseString = require('./reverseString');

test('return should the reversed string', ()=>{
    // arrange
    const stringToBeReverse = 'mahdi';
    const reversedString = stringToBeReverse.split('').reverse().join('');

    // act
    const result = reverseString(stringToBeReverse);

    // assert
    expect(result).toBe(reversedString);

})