(function (homeController) {

    homeController.init = function (app) {

        var data = require("../data");

        /* GET home page. */
        app.get('/', function (req, res) {
          res.render('index', {
            title: 'Islamic Mobility',
          });

/*            data.getBooks(function (err, books) {
                res.render('index', {
                    title: 'Islamic Mobility',
                    books: books
                });
            })
*/
        });

        app.get('/main', function(req, res) {
          res.render('partials/main');
        })

    }

}(module.exports));
