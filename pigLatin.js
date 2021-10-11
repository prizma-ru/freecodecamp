//todo https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
function translatePigLatin(str) {
    const rg = /^([^aeiou]*)([aeiou]*\w*)/gi;
    const agree = /^[^aeiou]{1}/gi;
    function replStr(str) {
      return agree.test(str) ? '$2$1ay' : `${str}way`;
    }
    return str.replace(rg, replStr(str));
  }
console.log(translatePigLatin("rhythm"));