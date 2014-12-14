(function(seed) {

  var book = require('../common/entities/book.js')

  seed.data = [
    new book("Book1", "Author1"),
    new book("Book2", "Author2"),
    new book("Book3", "Author3"),
    new book("Book4", "Author4"),
    new book("Book5", "Author5"),
    new book("Book6", "Author6"),
    new book("Book7", "Author7"),
  ];

}(module.exports));
