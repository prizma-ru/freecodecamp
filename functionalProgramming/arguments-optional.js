//TODO https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional
function addTogether() {
    const [a, b] = arguments;
    if (typeof a !== 'number') {
        return undefined;
    }
    if (b === undefined){
        return (b)=> addTogether(a,b);
    }
    if (typeof b !== 'number') {
        return undefined;
    }
return a + b;
}

console.log(addTogether(2)(3));
