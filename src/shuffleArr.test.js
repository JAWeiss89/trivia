import shuffleArr from './helpers/shuffleArr';

test("shuffleArr should not affect original array", () => {
    const arr1=['a', 'b', 'c', 'd', 'e'];

    const shuffledArr1 = shuffleArr(arr1);
    // arr1 should not be affected
    expect(arr1[0]).toBe('a');
    // should be different array (point to a different place in memory)
    expect(arr1).not.toBe(shuffledArr1);

});

test("shuffledArr should return a copy of an array with its contents shuffled", () => {
    const arr2=[1,2,3,4,5];

    const shuffledArr2 = shuffleArr(arr2);
    expect(arr2.length).toEqual(shuffledArr2.length);
    expect(arr2.includes(shuffledArr2[0]));

})

// TO-DO still need a test that proves that the indeces of the contents of the array have changed that ALWAYS passes the test

// Test below passes most of the time, depending on the length of the array 
test("Copy of array has items that have been shuffled", () => {
    const longArr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    const shuffledLongArr = shuffleArr(longArr);

    // Doesn't always pass because sometimes that first element stayed in same position by chance.
    expect(longArr[0]).not.toEqual(shuffledLongArr[0]);
})

