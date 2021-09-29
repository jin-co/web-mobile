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
class RegularPloygon {
    sides: number;
    sideLength: number;
    private name: string = "else"; //private: only visible with in the class

    constructor(sides: number, sideLength: number) {
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

    getPerimeter(): number {
        return(this.sides * this.sideLength);
    }
}

const square: RegularPloygon = new RegularPloygon(3, 3);

console.log(square.getPerimeter());
