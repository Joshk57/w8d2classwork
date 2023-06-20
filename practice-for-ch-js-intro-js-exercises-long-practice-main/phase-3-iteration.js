Array.prototype.bubbleSort = function() {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < this.length; i++) {
            if (this[i] > this[i+1]) {
                [this[i], this[i+1]] = [this[i+1], this[i]];
                sorted = false;
            }
        }
    }
    return this;
};

// console.log([1, 16, 2, 8, 2 , 7, 6].bubbleSort())

String.prototype.subStrings = function() {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i; j < this.length; j++) {
            array.push(this.slice(i, j+1));
        }
    }
    return array; 
};

// console.log('goth'.subStrings())

