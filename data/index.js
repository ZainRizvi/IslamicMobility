(function (data) {

    var filesystem = require("./filesystem");
    var seed = require("./seeddata");

    data.getBooks = function(next) {
      next(null, filesystem.data);
    }

}(module.exports));
