import './style.css';

const createLibrary = require('./modules/library');
const createBook = require('./modules/book');
const generateBooks = require('./modules/generate-books');

const NUM_OF_BOOKS_TO_SEED = 10;

const domHandler = {
  init() {
    this.library = createLibrary();
    this.seedLibrary();
    this.renderLibrary();
    this.bindListeners();
  },

  // Render functions
  // ==============
  //
  renderLibrary() {
    this.library.getLib().forEach((book) => {
      const row = document.createElement('tr');
      for (const data in book) {
        if (data === '_read') {
          const readButton = this.checkIfBookRead(book, data);
          row.append(readButton);
        } else {
          const tableCell = document.createElement('td');
          tableCell.innerText = book[data];
          row.append(tableCell);
        }
      }
      // Add delete icon cell
      const tableCell = document.createElement('td');
      tableCell.append(this.createMaterialIconSpan('delete'));
      row.append(tableCell);
      this.table.append(row);
    });
  },

  refreshTableRows() {
    this.deleteTableRows();
    this.renderLibrary();
    document
      .querySelectorAll('span')
      .forEach((icon) => icon.addEventListener('click', this.deleteBook));
  },

  // Util functions
  // ==============
  //
  seedLibrary() {
    const booksArray = generateBooks(NUM_OF_BOOKS_TO_SEED);
    booksArray.forEach((book) => this.library.addBook(book.getBook()));
  },

  deleteTableRows() {
    const rows = document.querySelectorAll('table > tr');
    rows.forEach((row) => row.remove());
  },

  createMaterialIconSpan(iconName) {
    const spanIcon = document.createElement('span');
    spanIcon.classList.add('material-symbols-outlined');
    spanIcon.textContent = iconName;
    return spanIcon;
  },

  checkIfBookRead(bookObj, bookObjKeys) {
    const readButton = document.createElement('button');
    readButton.innerText = bookObj[bookObjKeys];
    bookObj[bookObjKeys] === 'true'
      ? readButton.classList.add('read-btn')
      : readButton.classList.add('read-btn', 'not-read');
    return readButton;
  },

  // DOM element storage
  // ==============
  //
  table: document.querySelector('table'),
  bookFormContainer: document.getElementById('book-form-container'),
  openBookFormBtn: document.querySelector('.open-book-form-btn'),
  addBookBtn: document.querySelector('.book-form-btn-add'),
  cancelBtn: document.querySelector('.book-form-btn-cancel'),
  inputs: document.querySelectorAll('input'),
  textArea: document.querySelector('textarea'),

  // Listener functions
  // ==============
  //
  toggleBookForm() {
    this.bookFormContainer.classList.toggle('hidden');
  },

  addNewBook() {
    const inputValues = [];
    this.inputs.forEach((input) => {
      //
      // Only get checked radio button value
      if (input.type === 'radio' && !input.checked) {
        return;
      }
      inputValues.push(input.value);
    });
    //
    // Add text area value to input values
    inputValues.splice(4, 0, this.textArea.value);

    // Create new book + add to library
    const book = createBook(...inputValues);
    this.library.addBook(book.getBook());

    // Refresh table
    this.refreshTableRows();
    this.toggleBookForm();
  },

  deleteBook(event) {
    const bookId = event.target.parentNode.previousSibling.textContent;
    domHandler.library.deleteBook(bookId);
    domHandler.refreshTableRows();
  },

  toggleRead(event) {
    const btn = event.target;
    btn.classList.toggle('not-read');
    btn.textContent === 'true'
      ? (btn.textContent = 'false')
      : (btn.textContent = 'true');
  },

  // Bind listeners functions
  // ==============
  //
  bindListeners() {
    this.openBookFormBtn.addEventListener(
      'click',
      this.toggleBookForm.bind(this)
    );
    this.cancelBtn.addEventListener('click', this.toggleBookForm.bind(this));
    this.addBookBtn.addEventListener('click', this.addNewBook.bind(this));

    // Delete book click handler
    document
      .querySelectorAll('span')
      .forEach((icon) => icon.addEventListener('click', this.deleteBook));

    // Toggle book read click handler
    document.querySelectorAll('.read-btn').forEach((btn) => {
      btn.addEventListener('click', this.toggleRead);
    });
  },
};

domHandler.init();
