function uniteUnique(arr) {

    const SET_ARR = new Set([...arguments].flat());
    
    return [...SET_ARR];
  }
  
 console.log( uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));