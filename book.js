const createBook = (
  _title = 'no title provided at creation',
  _author = 'no author provided at creation',
  _pages = 'number of pages not provided at creation',
  _datePublished = 'no publishing date provided at creation',
  _summary = 'no summary provided at creation',
  _isbn = 'no ISBN provided at creation'
) => {
  return {
    // Getters
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
  };
};

module.exports = createBook;
