// controllers/index.js

(function (controllers) {
    
    var homeControllers = require("./homeController");
    
    controllers.init = function (app) {
        homeControllers.init(app);
    };
})(module.exports);