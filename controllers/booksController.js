(function(booksController) {

  var data = require("../data");

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

  }

}(module.exports));
