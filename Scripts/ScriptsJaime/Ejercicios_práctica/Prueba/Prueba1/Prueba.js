var timer;

/*
window.onload = function(){

    timer = setInterval ("moverderecha()", 30/1000)

}

function moverderecha() {

    var salto = 5;
    var dedo = document.getElementsByTagName("div") [0];
    var estilo = window.getComputedStyle(dedo);
    var actual = parseInt(estilo.getPropertyValue("left"));
    actual+=salto;
    dedo.style.left = actual+"px";
}



function moverrandom() {
    
    var dedo = document.getElementsByTagName("div") [0];
    
    var ale = parseInt(Math.floor(Math.random()*1750)+1);
    
    dedo.style.left = ale+"px";
    
    var ale2 = parseInt(Math.floor(Math.random()*800)+1);
    
    dedo.style.top = ale2+"px";
}
*/
/*

function parar() {
    clearInterval(timer);
   
}
*/
var dedo = document.querySelector("div");
    console.log(dedo.clientWidth)
    console.log(dedo.clientHeight)