//todo https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it
function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
            arr.shift();
    }
    return arr;
};



console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));