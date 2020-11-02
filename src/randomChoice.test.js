import randomChoice from './helpers/randomChoice';

const arr1=['a', 'b', 'c', 'd', 'e'];
const arr2=[1,2,3,4,5];

test("randomChoice function correctly returns a random item from array", () => {
    expect(arr1.includes(randomChoice(arr1))); // expect random choice to return an item inside the array it's passed
    expect(arr2.includes(randomChoice(arr2)));
    const randomValueFromArr1 = randomChoice(arr1);
    const indexOfRandomValue = arr1.indexOf(randomValueFromArr1);
    expect(indexOfRandomValue >= 0 && indexOfRandomValue <= arr1.length);
})

