const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    } else {
        for (let i =0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
    }
        return true;
};

const assertArraysEqual = function((eqArrays(arr1, arr2)), check) {
    if (check == true) {
        console.log(`✔️ Assertion Passed: ${arr1} === ${arr2}`);
    } else if (check != true) {
        console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
    }
};

assertArraysEqual(([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(([1, 2, 3], [3, 2, 1]), false);
assertArraysEqual((["1", "2", "3"], ["1", "2", "3"]), true);
assertArraysEqual((["1", "2", "3"], ["1", "2", 3]), false);