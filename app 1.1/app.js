var express 	= require('express');
var bodyParser 	= require('body-parser');
var login 		= require('./controller/login');
var admin 		= require('./controller/admin');
var employee 	= require('./controller/employee');
var logout 		= require('./controller/logout');
var addemployee = require('./controller/addemployee');
var allemployeelist = require('./controller/allemployeelist');
var myprofile = require('./controller/myprofile');
var updateprofile = require('./controller/updateprofile');
var app 		= express();

//config
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use('/login', login);
app.use('/logout', logout);
app.use('/admin', admin);
app.use('/employee', employee);
app.use('/admin/addemployee', addemployee);
app.use('/admin/allemployeelist', allemployeelist);
app.use('/employee/myprofile', myprofile);
app.use('/employee/updateprofile', updateprofile);

app.get('/', function(req, res){
	res.send("this is index page!<br> <a href='/login'> login</a> ");
});


app.listen(3000, function(){
	console.log('express http server started at...3000');
});