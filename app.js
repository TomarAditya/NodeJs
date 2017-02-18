

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
var port = processs.env.PORT || 8080

app.listen(port ,function(){
	console.log("App Running");
});




