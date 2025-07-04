//Write a function createCounter. It should accept an initial integer init. 
//It should return an object with three functions.

var createCounter = function(init) {
    let current = init;
    return {
        increment : function () {
            return ++current;
        },
        decrement : function () {
            return --current;
        },
        reset : function () {
            current = init;
            return current ;
        }
    };
};