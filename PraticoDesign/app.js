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

app.get('/cadastroCliente', function (request,response){
	response.render('cadastroCliente');
});

app.post('/cadastroCliente', function(request, response){
	nome = request.body.nome;
	idade = request.body.idade;
	mysqlConnection.query('insert into cliente(nome,data,email,ie_rg,cpf_cnpj,telefone,rua,bairro,cidade,estado,cep) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',[nome,data,email,ie_rg,cpf_cnpj,telefone,rua,bairro,cidade,estado,cep], function(err,result,fields){		
		if(!err){
			response.render('cadastroOk', {nome});
		}else{
			console.log(erro);
		}
	})		
});

app.get('/cadastroOk', function (request,response){
	response.render('cadastroOk');
});

app.get('/listaCliente', function (request,response){

	response.render('listaCliente', {data:result});	
});

app.listen(3000);