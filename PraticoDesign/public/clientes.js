// Para abrir e feixar o menu lateral
function toggleMenu()
{
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}



//Redirecionando para as outras abas do sistema
function abaCadastroClientes()
{
    window.location = "cadastroCliente";
}

function abaClientes()
{
    window.location = "clientes";
}

function abaLogin()
{
    window.location = "login";
}