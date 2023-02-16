// genetic.ts
var storage = /** @class */ (function () {
    function storage() {
        this.data = [];
    }
    storage.prototype.addData = function (newData) {
        this.data.push(newData);
    };
    return storage;
}());
var dataString = new storage();
dataString.addData('ne');
dataString.addData('test');
var dataNumber = new storage();
dataNumber.addData(1);
dataNumber.addData(2);
