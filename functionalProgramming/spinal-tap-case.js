//TODO https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case
function spinalCase(str) {
    
    return str.match(/[A-Z]{1}[a-z]*|[a-z]+/g).map(str => str.toLocaleLowerCase()).join('-');
  }
  
  console.table(spinalCase('This Is Spinal Tap_This_Is_Spinal_Tap'));