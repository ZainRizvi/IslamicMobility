(function(storage) {

  var database = require("./bookFileSystem");

  storage.data = database.data;

}(module.exports));
