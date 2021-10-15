//TODO https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/refactor-global-variables-out-of-functions
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(mas, bookName) {
    const NEW_BOOK_LIST = mas.slice();
    NEW_BOOK_LIST.push(bookName);
    return NEW_BOOK_LIST;

    // Change code above this line
}

// Change code below this line
function remove(mas, bookName) {
    const NEW_BOOK_LIST = mas.slice();
    var book_index = NEW_BOOK_LIST.indexOf(bookName);
    if (book_index >= 0) {

        NEW_BOOK_LIST.splice(book_index, 1);
        return NEW_BOOK_LIST;

        // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
console.log(newerBookList);
console.log(newestBookList);

