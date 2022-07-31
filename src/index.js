import './style.css';

const createLibrary = require('./modules/library');
const createBook = require('./modules/book');

const lib = createLibrary();
const book = createBook();
lib.addBook(book);
console.log(lib.getLib()[0].getBook());
