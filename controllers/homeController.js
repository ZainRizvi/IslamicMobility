(function (homeController) {
    
    homeController.init = function (app) {
        
        /* GET home page. */
        app.get('/', function (req, res) {
            res.render('index', { title: 'Islamic Mobility' });
        });

    }

}(module.exports));