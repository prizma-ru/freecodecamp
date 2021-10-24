function convertToRoman(num) {
    const unitsRoman = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        0: ""
    }
    const dozensRoman = {
        1: "X",
        2: "XX",
        3: "XX",
        4: "XL",
        5: "L",
        6: "LX",
        7: "LXX",
        8: "LXXX",
        9: "XC",
        0: "",
    }
    const hundredsRoman = {
        1: "C",
        2: "CС",
        3: "CС",
        4: "CD",
        5: "D",
        6: "DC",
        7: "DCC",
        8: "DCCC",
        9: "CM",
        0: "",
    }
    const thousand = (str) => {
        let strRoman = '';
        for (let index = 0; index < Number(str); index++) {
            strRoman += 'M';

        }
        return strRoman;
    }
    const arrRoman = (num) => (`${num}`).split('');
    const masRoman = [...arrRoman(num)];
    if (num < 10) {
        return unitsRoman[num];
    }
    if (num < 100) {
        return dozensRoman[masRoman[0]] + unitsRoman[masRoman[1]];
    }
    if (num < 1000) {
        return hundredsRoman[masRoman[0]] + dozensRoman[masRoman[1]] + unitsRoman[masRoman[2]];
    }
    if (num < 10000) {
        return thousand(masRoman[0]) + hundredsRoman[masRoman[1]] + dozensRoman[masRoman[2]] + unitsRoman[masRoman[3]];
    }
}


console.log(convertToRoman(400) === 'CD');


