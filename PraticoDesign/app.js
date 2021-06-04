var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var bp = require('body-parser');
var mysql = require('mysql2');

app.use(express.static('public'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    //password: '123456', 
    database: 'db_pratico_design'
});

app.get('/cadastroCliente', function(request, response) {
    response.render('cadastroCliente');
});

app.post('/cadastroCliente', function(request, response) {
    nome = request.body.nome;
    idade = request.body.idade;
    nascimento = request.body.nascimento;
    email = request.body.email;
    cpf_cnpj = request.body.cpf_cnpj;
    ie_rg = request.body.ie_rg;
    telefone = request.body.telefone;
    rua = request.body.rua;
    bairro = request.body.bairro;
    cidade = request.body.cidade;
    estado = request.body.estado;
    cep = request.body.cep;
    mysqlConnection.query('insert into cliente(nome,nascimento,email,ie_rg,cpf_cnpj,telefone,rua,bairro,cidade,estado,cep) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nome, nascimento, email, ie_rg, cpf_cnpj, telefone, rua, bairro, cidade, estado, cep], function(err, result, fields) {
        if (!err) {
            response.render('cadastroOk', { nome });
        } else {
            console.log(err);
        }
    })
});

app.get('/cadastroOk', function(request, response) {
    response.render('cadastroOk');
});

app.get('/listaCliente', function(request, response) {
    mysqlConnection.query('select * from cliente;', function(error, result, fields) {
        if (!error) {
            response.render('listaCliente', { data: result });
        } else {
            console.log(error);
        }
    })

});

app.post('/login',function(request,response){

    let login=request.body.login;
    let password=request.body.password;
    let logins="admin"
    
    if(logins.includes(login)){

     if (password =="1234"){
      
        response.render('home');
     }else{
         response.end("Senha Invalida!");
     }

   }else{
       response.end("Usuario nao existe!");
    response.render('login');
   }
  })

app.get('/login',function(request,response){
    response.render('login');
    
})

app.get('/home', function(request, response) {
    response.render('home');
});


app.listen(3000);
