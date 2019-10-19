const userController=require('../controllers/UserController');
const developerController=require('../controllers/DeveloperController');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
var passport  = require('../config/passport');

module.exports=function(app){
  
    app.post('/create',userController.store);

    app.post('/login',userController.login);

    /*app.post('/profile',developerController.getById);

    app.get('/profile',ensureAuthenticated,function(req,res){
        if(req.user.rol=='developer'){
            res.render('user/developerProfile',{
                user: req.user
            });
        }
    })*/

    app.get('/',function(req,res){
        res.redirect('/create');
    });

    app.get('/create',forwardAuthenticated,function(req,res){
        res.render('user/create');
    });

    app.get('/login',forwardAuthenticated,function(req,res){
        res.render('user/login');
    });

    app.get('/dashboard',ensureAuthenticated,function(req,res){
        res.render('user/dashboard',{
            user: req.user
          });
    })

    app.get('/logout',userController.logout)
}
