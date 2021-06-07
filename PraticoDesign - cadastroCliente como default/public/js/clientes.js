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
    window.location = "listaCliente";
}

function abaLogin()
{
    window.location = "login";
}












const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});