

var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//Set up template 
app.set('view engine' , 'ejs');

//Static files
//app.use(express.static('/public/assets'));

 app.use('/assets' , express.static('assets'));
//fire controller

todoController(app);


//listen to ports
app.listen(3000);
console.log("Everything working fine");


