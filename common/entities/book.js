(function () {
  'use strict';

  // Good reference on javascript classes
  // http://stackoverflow.com/a/1598077/21539

  var Book = function Book(title, author, props) {
    this.title = title;
    this.author = author;

    if (props) {
      if (props.description) {
        this.description = props.description
      }
      if (props.image) {
        this.image = props.image
      }
      if (props.epub) {
        this.epub = props.epub
      }
      if (props.pdf) {
        this.pdf = props.pdf
      }
      if (props.mobi) {
        this.mobi = props.mobi
      }
    }
  };

  if (typeof define === 'function' && define.amd) {
    // Publish as AMD module
    define(function() {return Book;});
  } else if (typeof(module) !== 'undefined' && module.exports) {
    // Publish as node.js module
    module.exports = Book;
  } else {
    // Publish as global (in browsers)
    var Raceme = window.Raceme = window.Raceme || {};
    Raceme.Common = Raceme.Common || {};
    Raceme.Common.Book = Book;
  }
}());
