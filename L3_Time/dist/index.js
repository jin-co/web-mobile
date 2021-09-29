"use strict";
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
// classes
var RegularPloygon = /** @class */ (function () {
    function RegularPloygon(sides, sideLength) {
        this.name = "else"; //private: only visible with in the class
        this.sides = sides;
        this.sideLength = sideLength;
        switch (this.sides) {
            case 3:
                this.name = "triangle";
                break;
            case 4:
                this.name = "square";
                break;
            case 5:
                this.name = "pentagon";
                break;
            case 6:
                this.name = "hexagon";
                break;
            // default:
            //     this.name = "else"
            //     break;
        }
    }
    RegularPloygon.prototype.getPerimeter = function () {
        return (this.sides * this.sideLength);
    };
    return RegularPloygon;
}());
var square = new RegularPloygon(3, 3);
console.log(square.getPerimeter());
