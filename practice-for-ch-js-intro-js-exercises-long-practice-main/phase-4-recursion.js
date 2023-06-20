const range = function(start, end) {
    
    let arr = [start];
    if (start === end) {
        arr.concat([end])
        return arr;
    }
    
    arr = arr.concat(range(start+1, end));
    
    return arr;
};

// console.log(range(2, 6))



const sumRec = function(arr) {
    let counter = 0
    if (arr.length === 0) {
        return 0
    }
    if (arr.length === 1) {
        counter = counter + arr[0]
        return counter
    }
    counter = counter + arr[0] + sumRec(arr.slice(1))
    return counter
}

// console.log(sumRec([1,2,3,4]))

const exponent = function(base, exp) {
    if (exp === 1) {
        return base
    }
    if (exp === 0) {
        return 1
    }

    return base * exponent(base, exp - 1)
}

const exponent2 = function(base, exp) {
    if (exp === 1) {
        return base
    }
    if (exp === 0) {
        return 1
    }

    if (exp % 2 === 0) {
        return exponent2(base, exp/2) ** 2
    } else {
        return base * (exponent2(base, (exp - 1)/2) ** 2)
    }
}

// console.log(exponent(5, 0))
console.log(exponent2(5,3))
