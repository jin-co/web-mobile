// classes
export class RegularPloygon {  //add export in front of class to export
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