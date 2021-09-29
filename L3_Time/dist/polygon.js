"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegularPloygon = void 0;
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
exports.RegularPloygon = RegularPloygon;
