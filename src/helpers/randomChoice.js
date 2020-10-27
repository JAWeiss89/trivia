// given an array this function will return a random item from the array

const randomChoice = (arr) => {
    // Generate a random integer from 0 to however long the array is -- this will serve as the index
    const randomIndex = Math.floor(Math.random()*arr.length);
    return arr[randomIndex];
}

export default randomChoice;