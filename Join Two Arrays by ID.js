// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

// joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

// If two objects share an id, their properties should be merged into a single object:

// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.


/**
 * Merges two arrays of objects based on their id field
 * @param {Array} arr1 - First array of objects
 * @param {Array} arr2 - Second array of objects
 * @returns {Array} - Merged array sorted by id
 */
function join(arr1, arr2) {
    // Use a Map to store objects by their id
    const mergedMap = new Map();
    
    // Process arr1 first
    for (const obj of arr1) {
        mergedMap.set(obj.id, { ...obj });
    }
    
    // Process arr2, merging with existing objects or adding new ones
    for (const obj of arr2) {
        if (mergedMap.has(obj.id)) {
            // Merge with existing object, arr2 values override arr1 values
            const existingObj = mergedMap.get(obj.id);
            mergedMap.set(obj.id, { ...existingObj, ...obj });
        } else {
            // Add new object
            mergedMap.set(obj.id, { ...obj });
        }
    }
    
    // Convert map values to array and sort by id
    return Array.from(mergedMap.values()).sort((a, b) => a.id - b.id);
}

// Test cases
console.log("Example 1:");
const arr1_1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
];
const arr2_1 = [
    {"id": 3, "x": 5}
];
console.log(join(arr1_1, arr2_1));

console.log("\nExample 2:");
const arr1_2 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
];
const arr2_2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
];
console.log(join(arr1_2, arr2_2));

console.log("\nExample 3:");
const arr1_3 = [
    {"id": 1, "b": {"b": 94}, "v": [4, 3], "y": 48}
];
const arr2_3 = [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
];
console.log(join(arr1_3, arr2_3));