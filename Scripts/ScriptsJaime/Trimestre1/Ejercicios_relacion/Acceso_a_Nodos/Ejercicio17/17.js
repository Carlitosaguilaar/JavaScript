var timer;
var timer2;
var timer3;
var timer4;

var fin;
var fin2;
var fin3;
var fin4;

function correr(){

	var aleatorio1 = Math.random() * (30/300 - 100) + 100;
	var aleatorio2 = Math.random() * (30/300 - 100) + 100;
	var aleatorio3 = Math.random() * (30/300 - 100) + 100;
	var aleatorio4 = Math.random() * (30/300 - 100) + 100;

	timer = setInterval("mover_1()", aleatorio1);
	timer2 = setInterval("mover_2()", aleatorio2);
	timer3 = setInterval("mover_3()", aleatorio3);
	timer4 = setInterval("mover_4()", aleatorio4);
}

function mover_1() {
	
	var dedo = document.getElementById("d1");

	var estilos = window.getComputedStyle(dedo);

	//var tamdiv = parseInt(estilos.getPropertyValue("width")); esto funciona, pero es más correcto lo siguiente:
	var tamdiv = dedo.offsetWidth;

	var valor = parseInt(estilos.getPropertyValue('left'));

	if (valor + 5 < window.innerWidth-tamdiv){

		valor += 5;
		dedo.style.left = valor+"px";

		console.log("Ancho pantalla: "+window.innerWidth);
	}
	else{

		clearInterval(timer)
	}
}

function mover_2() {
	
	var dedo = document.getElementById("d2");

	var estilos = window.getComputedStyle(dedo);

	//var tamdiv = parseInt(estilos.getPropertyValue("width")); esto funciona, pero es más correcto lo siguiente:
	var tamdiv = dedo.offsetWidth;

	var valor = parseInt(estilos.getPropertyValue('left'));

	if (valor + 5 < window.innerWidth-tamdiv){

		valor += 5;
		dedo.style.left = valor+"px";

		console.log("Ancho pantalla: "+window.innerWidth);
	}
	else{

		clearInterval(timer2)
	}
}

function mover_3() {
	
	var dedo = document.getElementById("d3");

	var estilos = window.getComputedStyle(dedo);

	//var tamdiv = parseInt(estilos.getPropertyValue("width")); esto funciona, pero es más correcto lo siguiente:
	var tamdiv = dedo.offsetWidth;

	var valor = parseInt(estilos.getPropertyValue('left'));

	if (valor + 5 < window.innerWidth-tamdiv){

		valor += 5;
		dedo.style.left = valor+"px";

		console.log("Ancho pantalla: "+window.innerWidth);
	}
	else{

		clearInterval(timer3)
	}
}

function mover_4() {
	
	var dedo = document.getElementById("d4");

	var estilos = window.getComputedStyle(dedo);

	//var tamdiv = parseInt(estilos.getPropertyValue("width")); esto funciona, pero es más correcto lo siguiente:
	var tamdiv = dedo.offsetWidth;

	var valor = parseInt(estilos.getPropertyValue('left'));

	if (valor + 5 < window.innerWidth-tamdiv){

		valor += 5;
		dedo.style.left = valor+"px";

		console.log("Ancho pantalla: "+window.innerWidth);
	}
	else{

		clearInterval(timer4)
	}
}


//
function resetear(){

	//
	var dedo = document.getElementById("d1");
	
	var estilos = window.getComputedStyle(dedo);

	var valor = parseInt(estilos.getPropertyValue('left'));

	valor = 0;

	dedo.style.left = valor+"px";

	clearInterval(timer);


	//
	var dedo2 = document.getElementById("d2");

	var estilos = window.getComputedStyle(dedo2);

	var valor = parseInt(estilos.getPropertyValue('left'));

	valor = 0;

	dedo2.style.left = valor+"px";

	clearInterval(timer2);


	//
	var dedo3 = document.getElementById("d3");

	var estilos = window.getComputedStyle(dedo3);

	var valor = parseInt(estilos.getPropertyValue('left'));

	valor = 0;

	dedo3.style.left = valor+"px";

	clearInterval(timer3);


	//
	var dedo4 = document.getElementById("d4");

	var estilos = window.getComputedStyle(dedo4);

	var valor = parseInt(estilos.getPropertyValue('left'));

	valor = 0;

	dedo4.style.left = valor+"px";

	clearInterval(timer4);
}