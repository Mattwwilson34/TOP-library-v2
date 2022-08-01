import './style.css';

const createLibrary = require('./modules/library');
const createBook = require('./modules/book');
const generateBooks = require('./modules/generate-books');

// Initialize library
const library = createLibrary();

// Seed Library
const booksArray = generateBooks(10);
booksArray.forEach((book) => library.addBook(book.getBook()));

// Store DOM table element
const table = document.querySelector('table');

// Add additional table elements + data to DOM
const renderLibrary = () => {
  library.getLib().forEach((book) => {
    const row = document.createElement('tr');
    for (const data in book) {
      const tableCell = document.createElement('td');
      tableCell.innerText = book[data];
      row.append(tableCell);
    }
    table.append(row);
  });
};

renderLibrary();

// Delete table rows
const deleteTableRows = () => {
  const rows = document.querySelectorAll('table > tr');
  rows.forEach((row) => row.remove());
};

// Store DOM form elements
const bookFormContainer = document.getElementById('book-form-container');
const openBookFormBtn = document.querySelector('.open-book-form-btn');
const addBookBtn = document.querySelector('.book-form-btn-add');
const cancelBtn = document.querySelector('.book-form-btn-cancel');

// Open book form
openBookFormBtn.addEventListener('click', () => {
  bookFormContainer.classList.toggle('hidden');
});

// Close book form
cancelBtn.addEventListener('click', () => {
  bookFormContainer.classList.toggle('hidden');
});

// Add book, close form, re-render table rows
addBookBtn.addEventListener('click', () => {
  const inputs = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  const inputValues = [];
  inputs.forEach((input) => {
    if (input.type === 'radio' && !input.checked) {
      return;
    }
    inputValues.push(input.value);
  });
  inputValues.splice(4, 0, textArea.value);
  const book = createBook(...inputValues);
  library.addBook(book.getBook());

  deleteTableRows();
  renderLibrary();
  bookFormContainer.classList.toggle('hidden');
});
