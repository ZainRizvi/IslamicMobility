(function(booksController) {

  var data = require("../data");

  booksController.init = function(app) {

    app.get("/api/books", function (req, res) {
      data.getBooks(function (err, books) {
        if (err) {
          res.send(400, err);
        }

        res.set("Content-Type", "application/json");
        res.send(books);
      })
    })

  }

}(module.exports));
