
var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT||5050;

var bodyParser = require('body-parser');

function configureEndpoints(app) {
    
    
    // route for home page
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

 


    app.get('/index', function(req, res) {
        res.render('index.ejs'
          );
    });


  
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

     app.get('/contacts', function(req, res) {
        res.render('contacts.ejs');
    });
    
     app.get('/privacy', function(req, res) {
        res.render('privacy.ejs');
    });

   
};

   

function startServer(port) {
    //Створюється застосунок
    var app = express();
    
    //Налаштування директорії з шаблонами
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    
  
    app.use(express.static(path.join(__dirname, 'public')));
  
    
  

app.use(bodyParser()); // get information from html forms

    //Налаштовуємо сторінки
    configureEndpoints(app);

    //Запуск додатка за вказаним портом
    app.listen(port, function () {
        console.log('Project running on http://localhost:'+ port+'/');
    });
}

exports.startServer = startServer;
