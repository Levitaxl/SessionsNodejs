const model=require('../models');
const passport=require('passport');
const bcrypt = require('bcryptjs');

module.exports={
    /**
     * Show the form for creating a new resource.
     */
    create(req,res){
        res.render('user/create');
    },
     /**
     * Store a newly created resource in storage.
     */
    store(req,res){

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) throw err;
                model.User.create({ 
                    firstName:req.body.firstName,
                    lastName:req.body.lastName,
                    email:req.body.email,
                    password:hash,
                    //rol:req.body. rol,
                })
                console.log('usuario creado')
                res.redirect('/login');
            })


        })
    },
     /**
     * Show the form for login
     */
    showLogin(req,res){
        res.render('user/login');
    },
    /**
     *Log in to the system
     */
    login(req, res, next){
        passport.authenticate('local', {
            successRedirect: '/dashboard',
            failureRedirect: '/login' 
        })(req, res, next);
    },
    /**
     * Show the form for logout
     */
    showDashboard(req,res){
        res.render('user/dashboard',{
            user: req.user
          });
    },
    /**
     *Log out to the system
     */
    logout(req, res){
        req.logout();
        res.redirect('/login');
    },
}