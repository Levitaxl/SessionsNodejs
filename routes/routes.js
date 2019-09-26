const userController=require('../controllers/UserController');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
var passport  = require('../config/passport');

module.exports=function(app){
    app.get('/',function(req,res){
        res.redirect('/create');
    });

    app.get('/create',userController.create);
    app.post('/create',userController.store);

    app.get('/login',forwardAuthenticated,userController.showLogin);
    app.post('/login',userController.login);

    app.get('/dashboard',ensureAuthenticated,userController.showDashboard)

    app.get('/logout',userController.logout)
}
