const crypto = require('crypto');

/**
 * Represents a book
 * @param {String} _title - The title of the book.
 * @param {String} _author - The author of the book.
 * @param {Number} _pages - The number of pages the book has.
 * @param {String} _datePublished - The date that the book was published.
 * @param {String} _summary - A brief summary of the book.
 * @param {Boolean} _read - If the book was read.
 * @returns a book object with the above value + _id + _isbn
 */
const createBook = (
  _title = 'no title provided at creation',
  _author = 'no author provided at creation',
  _pages = 'number of pages not provided at creation',
  _datePublished = 'no publishing date provided at creation',
  _summary = 'no summary provided at creation',
  _read = false
) => {
  const _id = crypto.randomUUID();
  const _isbn = crypto.randomUUID();

  return {
    // Getters
    getBook() {
      return { _id, _title, _author, _pages, _datePublished, _summary, _isbn };
    },
    getId() {
      return _id;
    },
    getTitle() {
      return _title;
    },
    getAuthor() {
      return _author;
    },
    getPages() {
      return _pages;
    },
    getDatePublished() {
      return _datePublished;
    },
    getSummary() {
      return _summary;
    },
    getIsbn() {
      return _isbn;
    },
    getRead() {
      return _read;
    },
    // Setters
    setRead() {
      _read = !_read;
    },
  };
};

module.exports = createBook;
