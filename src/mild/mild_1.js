/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    return `${a} + ${b} = ${a+b}`;
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    const result = [];
    for(let i=startNumber; i<=endNumber; i++){
        result.push(i);
    }
    return result;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    let max = numbers[0];
    let min = numbers[0];
    for(let i =1; i<numbers.length;i++){
        if(max<numbers[i]){
            max=numbers[i];
        }
        if(min>numbers[i]){
            min=numbers[i];
        }
    }
    return {max: parseInt(max), min: parseInt(min)};
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    const result = new Object();
    array.sort(function(a, b){
        return a-b
    });
    let count =1;
    let count2=0;
    for(let i =0; i<array.length;i++){
        if(array[i]==array[i+1])
        count++;
    else{
        result[array[count2]]=count;
        count2++;
        count = 1;
    }
}
return result;
    
}
