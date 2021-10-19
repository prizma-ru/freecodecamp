//TODO https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers
function sumFibs(num) {
    let step = 0;
    const FIBONACCI_NUMBERS = [0, 1];
    let i = 0;
    while ((step = FIBONACCI_NUMBERS[i] + FIBONACCI_NUMBERS[i + 1]) <= num) {
        FIBONACCI_NUMBERS.push(step);
        i++;
    }
    return FIBONACCI_NUMBERS.filter(x => x % 2 !== 0).reduce((a, b) => a + b);
}

console.log(sumFibs(1000));
console.log([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144].filter(x => x % 2 == 0));