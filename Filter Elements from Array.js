// //Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

function filter (arr, fn){
const filteredArr =[];
for ( let i = 0; i < arr.length; i++){
    if ( fn(arr[i] , i)) {
        filteredArr.push(arr[i]);
    }
}
return filteredArr
}
