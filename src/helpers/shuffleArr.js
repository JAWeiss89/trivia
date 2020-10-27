// given an array, shuffleArr returns a NEW arr with the same contents but in a random order.

function shuffleArr(arr) {
    // make a copy as to not affect original arr
    const arrCopy = [...arr];
    const newArr = [];
    
    while (arrCopy.length > 0) {
        // we will remove a random item from the arrCopy and add it to newArr. After each iteration, arrCopy gets smaller
        let removedItem = arrCopy.splice(Math.floor(Math.random()*arrCopy.length), 1);
        newArr.push(removedItem[0]); 
    }
    return newArr;
}

export default shuffleArr;