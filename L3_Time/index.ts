let foa: any = 7; //don't use any as it defeats the purpose of using typescript
let fob: number[] = [7, 2]; // using array
let foc: number[] = []; // empty array
let fod: number = 7;
const FOO: number = 7;
function isEven(input:number): boolean {
    if (input % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let foe: boolean = isEven(fod);