'use strict';

module.exports = arr => {
    let sorted = true;
    while (sorted) {
        sorted = false;
        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                sorted = true;
            }
        }
    }
    return arr;
};
