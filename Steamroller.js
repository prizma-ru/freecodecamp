function steamrollArray(arr) {
    return arr.flat();
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log([].concat(...[1, [2], [3, [[4]]]]));

const arr = [1, [], [3, [[4,[3, [[4]]],[3, [[4]]]]]]];

function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
        : arr.slice();
};

console.log(flatDeep(arr, Infinity));