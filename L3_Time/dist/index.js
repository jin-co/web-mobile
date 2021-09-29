"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var foa = 7; //don't use any as it defeats the purpose of using typescript
var fob = [7, 2]; // using array
var foc = []; // empty array
var fod = 7;
var FOO = 7;
// functions
function isEven(input) {
    if (input % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
var foe = isEven(fod);
function countCs(s) {
    var count = 0;
    var i = 0;
    for (i = 0; i < s.length; i++) {
        if (s.charAt(i) === 'c' || s.charAt(i) === 'C')
            count++;
    }
    return (count);
}
var polygon_1 = require("./polygon"); //forward slash not back slash
var square = new polygon_1.RegularPloygon(3, 3);
console.log(square.getPerimeter());
