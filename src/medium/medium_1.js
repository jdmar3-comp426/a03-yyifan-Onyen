import { maxAndMin } from "../mild/mild_1.js";
import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let a = 0;
    for(let i =0; i< array.length; i++){
        a = a + array[i];
    }
    return a;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    /*array.sort(function(a, b){return a-b});
    if(array.length%2==0){
        const a = (array.length)/2;
        const b = a - 1;
        const medium = (array[a]+array[b])/2;
    }
    else{
        const a = (array.length+1)/2;
        const medium = array[a-1];
    }
    return medium;*/
    array.sort(function(a, b){
        return a-b
    });
    var mid = Math.floor(array.length / 2);
    if(array.length%2){
        return array[mid];
    }
    return (array[mid - 1] + array[mid]) / 2.0;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let length = array.length;
    let sum = getSum(array);
    let mean = sum / length;
    let median = getMedian(array);
    let max = maxAndMin(array).max;
    let min = maxAndMin(array).min;
    let variance = 0;
    for(let i=0;i<array.length;i++){
        variance = variance + (array[i] - mean)**2;
    }
    variance = variance / array.length;
    let stand = Math.sqrt(variance);
    return {min: min, median: median, max: max, variance: variance, mean: mean, length: length, sum: sum, standard_deviation: stand};
}

