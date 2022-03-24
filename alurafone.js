var listaDeTeclas = document.querySelectorAll('input[type=button]');
var inputTel = document.querySelector('input[type=tel]');

for(let contador = 0; contador < listaDeTeclas.length; contador++){
	
	const tecla = listaDeTeclas[contador];

	tecla.onclick = function (){

		inputTel.value = inputTel.value + tecla.value;

	};

	tecla.onkeydown = function (evento){

		if (evento.code === "Enter" || evento.code === "Space"){

			tecla.classList.add('ativa');

		};

	};

	tecla.onkeyup = function (){

		tecla.classList.remove('ativa');

	};

}
