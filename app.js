'use strict';
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const pg=require('pg');
const path = require('path');
const db=require(__dirname+'/models');
const customerRoutes=require(__dirname +'/routes/routes.js');
const passport = require('passport');
const session = require('express-session');

require(__dirname+'/config/passport')(passport);



app.set('view engine','ejs'); //Plantillas
app.set('views',path.join(__dirname,'resources','views'));//Asocio las rutas de las plantillas

app.use(bodyParser.json());//Permite leer los formularios
app.use(bodyParser.urlencoded({extended:false}));//Permite leer los formularios

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  //cookie: { secure: true }
}))

app.use(passport.initialize());
app.use(passport.session());

customerRoutes(app);

db.sequelize.sync().then(function (){
  app.listen(3000,function(){
    console.log('Server activo');
    });
});
