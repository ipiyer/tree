/* jslint node: true */
"use strict";


/**
 *  Generates Panlindrome between 1 and 10000
 */

function palindrome() {
    var result = [];

    // 0 - 9
    for (var ones = 0; ones < 10; ones++) {
        result.push(ones);
    }

    // 10 - 99

    for (var tens = 1; tens < 10; tens++) {
        result.push(tens + tens * 10);
    }


    // 100 - 999

    for (var x = 1; x < 10; x++) {
        for (var y = 0; y < 10; y++) {
            result.push(x + y * 10 + x * 100);
        }
    }

    return result;
}

module.exports = palindrome;

console.log(palindrome());