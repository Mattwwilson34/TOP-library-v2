import './style.css';

const createLibrary = require('./modules/library');
const generateBooks = require('./modules/generate-books');

// Initialize library
const library = createLibrary();

// Seed Library
const booksArray = generateBooks(10);
booksArray.forEach((book) => library.addBook(book.getBook()));

// Store DOM table element
const table = document.querySelector('table');

// Add additional table elements + data to DOM
library.getLib().forEach((book) => {
  const row = document.createElement('tr');
  for (const data in book) {
    const tableCell = document.createElement('td');
    tableCell.innerText = book[data];
    row.append(tableCell);
  }
  table.append(row);
});
