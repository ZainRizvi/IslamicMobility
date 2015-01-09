(function(storage) {

  var database = require("./bookFileSystemData");

  storage.data = database.data;
  
}(module.exports));
