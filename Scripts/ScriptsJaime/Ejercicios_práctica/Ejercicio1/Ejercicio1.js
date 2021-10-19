function boton() {
    var num1 = parseInt(prompt ("Dime un número. "));
    var num2 = parseInt(prompt ("Dime otro número. "));

    var suma = (num1+num2);
    var resta = +num1-num2;
    var multiplicacion = num1*num2;

    var Resultados = alert ("El resultado de la suma es "+suma+", el total de la resta es "+resta+" y el resultado de la multiplicación es "+multiplicacion)
    


}


function jugar() {
    var numeromaquina = parseInt(Math.random()*10+1);

    do {
        var numerousuario = prompt ("Dime un número: ");

    if (numerousuario<numeromaquina) {
        alert ("Te has quedado corto");
        
    }
    else if (numerousuario>numeromaquina){
        alert ("Te has pasado")
    }
    else{
        alert ("Has acertado!!")
    }
    } while (numerousuario!=numeromaquina);
    
    
}


function bolera() {
    var numpersonas = prompt ("Dime el número de jugadores: ");
    var preciototal = 0;
    var contadorpersonas=0;

        do {
            var edadpersona = prompt ("Dime la edad del jugador: ");
        
        if (edadpersona <6) {
            preciototal+=1;
        }
        else if (edadpersona >=6 && edadpersona <=12){
            let preciobillete = 10*0.25;
            preciototal+= preciobillete;
        }
        else if (edadpersona >=13 && edadpersona <=50){
            preciototal+= 10;
        }
        else  if (edadpersona >=51 && edadpersona <=65){
            let preciobillete = 10*0.25;
            preciototal+= preciobillete;
        }
        else{
            preciototal+=1;
        }
        contadorpersonas++;
        } while (contadorpersonas!=numpersonas);


        document.write ("Bolera Medaaaaaaaaaas asco"+ "")
        document.write ("Personas: "+numpersonas +"<br>");
        document.write ("Total a pagar: "+preciototal+ " €"); 
}