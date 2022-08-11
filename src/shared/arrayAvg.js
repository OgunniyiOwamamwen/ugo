/*
vovem-ugo v2.4.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

const arithmetic = require('../utils/arithmetic');

// Array Avg
module.exports = function arrayAvg (n) {
    return n.arithmetic((p, c) => p + c, 0) / n.length;
};