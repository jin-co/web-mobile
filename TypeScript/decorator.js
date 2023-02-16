var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function DecoTest(type) {
    return function (output) {
        output.prototype.value = type;
    };
}
var ClassOne = /** @class */ (function () {
    function ClassOne() {
        this.type = 'number';
    }
    ClassOne = __decorate([
        DecoTest(1)
    ], ClassOne);
    return ClassOne;
}());
var ClassTwo = /** @class */ (function () {
    function ClassTwo() {
        this.type = 'number';
    }
    ClassTwo = __decorate([
        DecoTest(2)
    ], ClassTwo);
    return ClassTwo;
}());
console.log(new ClassOne().value);
console.log(new ClassTwo().value);
