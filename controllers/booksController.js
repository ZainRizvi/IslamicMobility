(function(booksController) {

  var data = require("../data");
  var AzureSearch = require('azure-search');

  var client = AzureSearch({
    url: "https://islamicmobility.search.windows.net",
    key: process.env.SearchKey
  });

  booksController.init = function(app) {

    app.get("/api/books/startIndex/:startIndex/count/:count", function (req, res) {
      data.getBooks(req.params.startIndex, req.params.count, function (err, books) {
        if (err) {
          res.send(400, err);
        }

        res.set("Content-Type", "application/json");
        res.send(books);
      })
    })

    app.get("/api/books/search/:search", function (req, res) {

      client.search('books', {search:req.params.search}, function(err, results){
        if (err) {
          console.log ("YIKES!!!");
          console.log(err);
          return;
        }

        res.set("Content-Type", "application/json");
        res.send(results);
      });
    });

  }

}(module.exports));
