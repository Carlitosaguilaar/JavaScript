function ejercicio1() {
    var cantidad = prompt ("Dime el número de dólares")     //Pedimos el numero de dolares
    var dolares = 1.1642;       //Pedimos la tasa de cambio
    var cambio = cantidad * dolares;        //Hacemos el cambio
    alert(cantidad+"€, cambiados a dólares, son un total de "+cambio+"$.");     //Sacamos por pantalla con un alert el resultado
}

function ejercicio2() {

    var contadornotas= 0, cfail=0, cpass=0, cnotables = 0, csobres = 0;
    
    do {
        var nota = prompt ("Introduce una nota. ");
        contadornotas ++;       //Sumamos uno al contador

        if (Number (nota) == nota) {
            if (nota >= 0 && nota <= 10) {
                if (nota < 5) {     //Notas menores a 5 (1-4)
                    cfail++;        //Sumamos 1 al contador pertinente
                }
                else if (nota < 7){         //Notas menores a 7 (6 y 7 ya que en caso de que la nota sea 1, entra en el primer IF)
                    cpass++;        //Sumamos 1 al contador pertinente
                }
                else if (nota < 9) {       //Notas menores a 9 (solo entran notas 7 y 8 ya que en caso de que la nota sea 1, entra en el primer IF)
                    cnotables++;    //Sumamos 1 al contador pertinente            
                }
                else if (nota >= 9) {       //Notas mayores a 9
                    csobres++;      //Sumamos 1 al contador pertinente
                }
            }
            else{           //En caso de que no se introduzca una nota correcta (numero mayor o igual a 11), volvemos a pedir nota
                alert ("Nota errónea");
                contadornotas--;        //Restamos 1 al contador de notas para que esta nota no cuente en el contador de notas
            }
        }
        else{
            if (nota != undefined) {    //En caso de que no introduzca un numero, volvemos a pedir nota.
                alert ("Introduce un número válido");
                contadornotas--;        //Restamos 1 al contador de notas para que esta nota no cuente en el contador de notas
            }
        }
    } while (contadornotas!=10);        //El bucle se interrumpe cuando se hayan introducido 10 notas

    alert ("Suspensos: "+cfail+".\nAprobados: "+cpass+". \nNotables: "+cnotables+". \nSobresalientes: "+csobres+"." )        //Sacamos en un alert el recuento
}

function ejercicio3() {
    var dedo = document.querySelector("p");
    var sumatotal = parseInt(0);

    do {
        var numero = prompt("Dime un número");
        if (Number (numero) == numero) {        //Comprobamos que sea un numero
            if (numero>0) {
            sumatotal+=parseInt(numero);           //Si el numero es mayor que 0, sumamos el numero al total (no concatenamos)
            }

        }else{
            if (numero != undefined) {    
            alert ("Introduce un número válido");       //Pedimos otra vez el numero en caso de que nos introduzca algo que no sea un numero.
            }
        }
    } while (numero>0);         //Seguimos el bucle siempre y cuando el numero introducido sea mayor que 0

    dedo.textContent="="+parseInt(sumatotal)        //Sacamos el contenido de dedo
}



function ejercicio4() {
    var numeros = new Array(5);
    var pares = new Array();            //Creamos los diferentes Arrays
    var impares = new Array();
    var dedo = document.getElementById("2") ;
    
    for (let i=1; i<=5; i++) {
        let num = prompt("Dime un numero")          //Pedimos numeros a los usuarios
        let numrandom = parseInt(Math.random()*10+1);       //Creamos los numeros random para multiplicarlos por los numeros que introduce el usuairo
        numfinal = num * numrandom;                      //Hacemos la multiplicacion
        console.log(num+ " x "+numrandom+" = "+numfinal)                //Mostramos la multiplicacion en el console.log

        if (numfinal%2 == 0) {
            pares[i] = numfinal;                //Si el resto de la division es 0, se añade al array "pares"
        }
        else{
            impares[i] = numfinal;          //Si no, se añade el numero al array "impares"
        }
    }
    dedo.textContent = "Pares: "+pares+"  \nImpares: "+impares;   
    
}