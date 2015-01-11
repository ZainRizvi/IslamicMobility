(function (data) {

    var filesystem = require("./filesystem");
    var seed = require("./seeddata");

    data.getBooks = function(startIndex, count, next) {
      console.log("Start index = " + startIndex + ", count = " + count)
      var bookData = filesystem.data.slice(startIndex, parseInt(startIndex) + parseInt(count));
      next(null, bookData);
    }

}(module.exports));
