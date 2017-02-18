var bodyParser = require('body-parser');

var mongoose = require('mongoose');

// connect to database.



mongoose.connect('mongodb://test:test@ds153659.mlab.com:53659/todoymca');

//Create a Schema - Like a blue Print  

var todoSchema = new mongoose.Schema({

item : String

});


var Todo = mongoose.model('Todo' ,todoSchema);

// var itemOne = Todo({item : 'Get Flowers'}).save(function(err){

// if (err) throw err;
// console.log('item Saved');

// });


//var data = [{item:'Aditya'},{item:'Singh'} ,{item:'Tomar'}];

var urlencodedParser = bodyParser.urlencoded({extended:false});


module.exports = function(app){



app.get('/todo' , function(req,res){

// Get data from mongo db and pass to view

  Todo.find({} ,function(err,data){
if (err) throw err;
res.render('todo' , {todos:data});

  });


});





app.post('/todo' , urlencodedParser ,function(req,res){

//Get data from the view and add to mongo DB

var newTodo = Todo(req.body).save(function(err,data){

if(err) throw err;
res.json(data);

});

//data.push(req.body);
//res.json(data);  



});




app.delete('/todo/:item' , function(req,res){

Todo.find({item: req.params.item.replace(/\-/g, "")}).remove(function(err,data){

if (err) throw err;
res.json(data);

});


//data = data.filter(function(todo){

//return todo.item.replace(/ /g, '-') !== req.params.item;

});

//res.json(data);


}