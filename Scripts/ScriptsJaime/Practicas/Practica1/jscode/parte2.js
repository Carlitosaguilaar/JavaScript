function generar() {
    var dedoizq = document.getElementById("ladoIzq")
    var dedoder = document.getElementById("ladoDer")
    var generar = document.querySelector("input")           //Creamos todos los dedos
    var compara = document.getElementById("2");
    var dedoabaj = document.getElementById("salida")

    var num1 = parseInt (Math.random()*50+1);       
    var num2 = parseInt (Math.random()*50+1);           //Generamos los dos numeros aleatorios para rellenar los divs

    dedoizq.innerHTML = num1;       //Escribimos en la caja izquierda el numero 1
    dedoder.innerHTML = num2;       //Escribimos en la caja izquierda el numero 2
    generar.disabled = true;        //Deshabilitamos el boton generar
    compara.disabled = false;       //Hablitamos el boton comparar
    dedoabaj.innerHTML = ""     //Limpiamos el div inferior, sustituyendo el texto que se encontraba.
}

function comparar() {
    var dedoizq = document.getElementById("ladoIzq")
    var valorizq = dedoizq.innerHTML;       //Recibimos el HTML que tenemos dentro de la caja izquierda
    var dedoder = document.getElementById("ladoDer")            //Cremos los dos numeros
    var valorder = dedoder.innerHTML;       //Recibimos el HTML que tenemos dentro de la caja derecha
    var dedoabaj = document.getElementById("salida")
    var generar = document.querySelector("input")       //Creamos dedos que nos sirven 
    var compara = document.getElementById("2");

    if (valorizq < valorder) {              
        dedoabaj.innerHTML = dedoizq.innerHTML; //Si el valor de la caja izquierda es superior a la derecha, en la caja inferior se escribe el numero de la caja izquierda 
    }
    else{
        dedoabaj.innerHTML = dedoder.innerHTML; //Si el valor de la caja derecha es superior a la izquierda, en la caja inferior se escribe el numero de la caja derecha
    }

    generar.disabled = false;           //Habilitamos el boton "generar"
    compara.disabled = true;            //Deshabilitamos el boton "comparar"
}