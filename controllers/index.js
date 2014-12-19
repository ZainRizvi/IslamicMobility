// controllers/index.js

(function (controllers) {

    var homeControllers = require("./homeController");
    var booksControllers = require("./booksController");

    controllers.init = function (app) {
        homeControllers.init(app);
        booksControllers.init(app);
    };
})(module.exports);
