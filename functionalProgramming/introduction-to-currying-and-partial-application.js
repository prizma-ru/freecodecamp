//TODO https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/introduction-to-currying-and-partial-application
function add(x) {
    // Only change code below this line
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    };

    // Only change code above this line
}

// function add(x) {
//     // Add your code below this line
//     return y => z => x + y + z;
//     // Add your code above this line
// }


console.log(add(10)(20)(30));