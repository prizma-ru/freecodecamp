//TODO https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/split-a-string-into-an-array-using-the-split-method
function splitify(str) {
    // Only change code below this line
  return str.split(/\W/gi);
  
    // Only change code above this line
  }
  console.log(splitify("Hello World,I-am code"));

  console.log('Roman Numeral Converter'.replace(/\s/g,'-').toLowerCase());