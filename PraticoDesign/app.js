var express = require('express');
var exphbs = require ('express-handlebars');
var app = express();
var bp = require('body-parser');
var mysql = require ('mysql2');

app.use(express.static('public'));
app.engine('handlebars', exphbs ({defaultLayout:'main'}));
app.set ('view engine', 'handlebars');
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

var mysqlConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456', 
	database: 'db_clientes'
});

app.get('/cliente', function (request,respose){

	mysqlConnection.query('SELECT * FROM db_clientes.cliente;', function(err,result,fields){
		
		if(err){
			console.log(err);
		}else{
			console.log(result);
		}
	});

	request.render('cliente');
});

app.listen(3000);