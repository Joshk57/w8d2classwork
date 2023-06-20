Array.prototype.uniq = function() {
    let newArr = []
    // arr.forEach(num => {
    //     if (!newArr.includes(num)) {
    //         newArr.push(num);
    //     }
    // });

    for (let i = 0; i < this.length; i++) {
        if (!newArr.includes(this[i])) {
            newArr.push(this[i]);
        }
    }
    return newArr;
};
// const array = [1,2,2,3,3,3]
// console.log(array.uniq()) // => [1,2,3]

Array.prototype.twoSum = function() {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                newArr.push([i, j])
            }
        } 
    }
    return newArr;
};

// console.log([-1, 0, 2, -2, 1].twoSum()) // => [[0,4] [2,3]]

Array.prototype.transpose = function() {
    let transposedArray = []
    for (let col = 0; col < this.length; col++) { 
        let transposedRow = [];
        for (let row = 0; row < this[0].length; row++) {
            transposedRow.push(this[row][col])
        }
        transposedArray.push(transposedRow)
    }
    return transposedArray;
};

// console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose()) // => [[0,3,6], [1,4,7], [2,5,8]]