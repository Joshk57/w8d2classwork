Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

// Array.prototype.myMap = function(callback) {
//     let mappedArr = [];

//     this.myEach(ele => {
//         mappedArr.push(callback(ele))
//     })
//     return mappedArr;
// }

Array.prototype.myReduce = function(callback, initialValue) {

    initialValue = initialValue || this[0]

    if (initialValue === this[0]) {
        let arr = this.slice(1)
        arr.myEach(ele => {
            initialValue = callback(initialValue, ele)
        })
    } else {
        this.myEach(ele => {
            initialValue = callback(initialValue, ele)
        })
    }
    return initialValue;
}


console.log([1, 2, 3].myReduce(function(acc, el) {
    return acc + el;
  }, 2))