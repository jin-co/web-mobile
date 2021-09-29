let foa: any = 7; //don't use any as it defeats the purpose of using typescript
let fob: number[] = [7, 2]; // using array
let foc: number[] = []; // empty array
let fod: number = 7;
const FOO: number = 7;

// functions
function isEven(input:number): boolean {
    if (input % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let foe: boolean = isEven(fod);

function countCs(s:string): number {
    let count: number = 0;
    let i: number = 0;
    for (i = 0; i < s.length; i++) {
        if (s.charAt(i) === 'c' || s.charAt(i) === 'C')
        count++;
    }
    return(count);
}

// classes
// var RegularPloygon = /** @class */ (function () {
//     function RegularPloygon(sides, sideLength) {
//         this.name = "else"; //private: only visible with in the class
//         this.sides = sides;
//         this.sideLength = sideLength;
//         switch (this.sides) {
//             case 3:
//                 this.name = "triangle";
//                 break;
//             case 4:
//                 this.name = "square";
//                 break;
//             case 5:
//                 this.name = "pentagon";
//                 break;
//             case 6:
//                 this.name = "hexagon";
//                 break;
//             // default:
//             //     this.name = "else"
//             //     break;
//         }
//     }
//     RegularPloygon.prototype.getPerimeter = function () {
//         return (this.sides * this.sideLength);
//     };
//     return RegularPloygon;
// }());

// using import
import{ RegularPloygon } from './polygon';  //forward slash not back slash

const square: RegularPloygon = new RegularPloygon(3, 3);

console.log(square.getPerimeter());
