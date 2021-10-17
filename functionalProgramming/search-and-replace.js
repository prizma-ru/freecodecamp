//TODO https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace
function myReplace(str, before, after) {
    const CASE_FIRST_CHAR = function(before, after){
        if (before[0].toUpperCase() === before[0]){
            return after[0].toUpperCase() + after.slice(1);
        }
        else {
            return after.toLowerCase();
        }
    } 
    return str.replace(before, CASE_FIRST_CHAR(before, after));
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));