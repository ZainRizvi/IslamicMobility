(function (homeController) {
    
    homeController.init = function (app) {
        
        var data = require("../data");
        
        /* GET home page. */
        app.get('/', function (req, res) {
            
            data.getBooks(function (err, books) {
                res.render('index', {
                    title: 'Islamic Mobility',
                    books: books
                });
            })
            
        });

    }

}(module.exports));