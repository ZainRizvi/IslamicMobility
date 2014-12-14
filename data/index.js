(function (data) {

    var database = require("./filesystem");
    var seed = require("./seeddata");

    data.getBooks = function(next) {
      next(null, seed.data);
    }

}(module.exports));
