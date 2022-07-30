const crypto = require('crypto');

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
