function convertToRoman(num) {
    const romanN = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M",

    }

    return romanN[num];
}


console.log(convertToRoman(10));

console.log(3900%1000);