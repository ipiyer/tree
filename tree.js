/* jslint node: true */
"use strict";

function triangle(size) {
    var str;

    // print pyramid;
    (function() {
        var n = size;
        var nStars = 0;

        while (n) {
            str = Array(n)
                .join(" ")
                .concat(Array(nStars).join("*"));

            console.log(str);
            nStars += 2;
            n -= 1;
        }
    })();

    // print stem
    str = Array(size - 1)
        .join(" ")
        .concat("*");

    console.log(str);
}



exports.triangle = triangle;


if (process.argv.length > 2) {
    try {
        var size = parseInt(process.argv[2], 10);
        size = size > 4 ? size : 5; // triangle of size 1 - 3 is gonna look crap
        triangle(size);
    } catch (e) {
        console.log(process.argv[1], " has to be a number");
    }
} else {
    // default size of triangle is 8;
    triangle(8);
}