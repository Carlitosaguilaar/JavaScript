window.onload = function(){
    var boton = document.querySelector("input[type='submit']");
    boton.onclick = function(e){
        e.preventDefault();
        validar();
    }
}



function validar(){                 //Creamos la función para validar formulario
    var f = document.getElementById("formu");
    var name = f.nick;
    var clave = f.clave;
    var clave2 = f.clave2;
    var lista = f.pregunta;
    var answer = f.respuesta;       //Declaramos las variables
    var radios = f.sexo;
    var edad = f.edad;
    var email = f.email;
    var frase = f.frase;
    var captcha = f.captcha;
    var condiciones = document.querySelector("input[type='checkbox']")
    var contador = 0; //Para comprobar, utlizaremos un contador para saber cuantas condiciones se cumplen. Son 17 condiciones.


    
    if (!isNaN(name.value)){            //Mejora 1  
        alert ("Introduce una letra, al menos, en el NICK");
        nombre.focus();
    }
    else{
         contador++;     //Sumamos 1 al contador de condiciones cumplidas 
    }
   
    
    
    if(name.value.length==0){               //Comprobamos que no deja el campo vacío
        alert("El campo NICK está vacío, rellena el campo");
        nombre.focus();
    }
    else{
         contador++;     //Sumamos 1 al contador de condiciones cumplidas     
    }


    
    if(clave.value.length==0){              //Comprobamos que no deja el campo vacío
        alert("El campo CLAVE está vacío, rellena el campo");
        clave.focus();
    }
    else{
         contador++;     //Sumamos 1 al contador de condiciones cumplidas
    }
    


    if (clave.value == name.value){         //Comprobamos que nombre y contraseña son diferentes, si son iguales, salta error
        alert ("No se puede poner el mismo nick y la misma contraseña")
        clave.focus();
    }
    else{
         contador++;     //Sumamos 1 al contador de condiciones cumplidas
    }



    if(clave.value.length<8){           //Comprobamos que la contrasela tenga 8 caracteres, como mínimno       
        alert("La contraseña debe de tener, al menos, 8 caracteres.");
        clave.focus();
    }
    else{
         contador++;     //Sumamos 1 al contador de condiciones cumplidas
    }
    
    
    
    if(clave2.value.length==0){              //Comprobamos que no deja el campo vacío
        alert("El campo REPETIR CLAVE está vacío, rellena el campo");
        clave2.focus();
    }
    else{
         contador++;     //Sumamos 1 al contador de condiciones cumplidas
    }
    

    
    if (clave2.value != clave.value){           //Comprobamos que las contraseñas son iguales, si no lo son, salta error    
        alert("Compruebe la contraseña que ha introducido, no son iguales");
        clave.value="";
        clave2.value="";
        clave2.focus();
    }
    else{
         contador++;     //Sumamos 1 al contador de condiciones cumplidas
    }



    if (lista.selectedIndex==0){                //Comprobamos que no deja el campo vacío    
        alert("Esta opción no se puede marcar por el momento, elija alguna otra opción, porfavor")
        lista.focus();
    }
    else{
         contador++;     //Sumamos 1 al contador de condiciones cumplidas
    }



    if(answer.value.length==0){              //Comprobamos que no deja el campo vacío
        alert("El campo RESPUESTA está vacío, rellena el campo");
        answer.focus();
    }
    else{
         contador++;     //Sumamos 1 al contador de condiciones cumplidas
    }

    if(answer.value.length<6){           //Comprobamos que la contraseña tenga, al menos, 6 caracteres
        alert ("La respuesta tiene que tener, como mínimo, 6 caracteres");
        answer.focus();

    }
    else{
         contador++;     //Sumamos 1 al contador de condiciones cumplidas
    }



    if ( !radios[0].checked && !radios[1].checked){           //Comprobamos que alguno de los dos campos tipo radio están marcados            
        alert ("Ninguno de los campos SEXO están marcados")
        radios.focus();
    }
    else{
         contador++;     //Sumamos 1 al contador de condiciones cumplidas
    }
    

    
    if(edad.value.length==0){              //Comprobamos que no deja el campo vacío
        alert("El campo EDAD está vacío, rellena el campo");
        edad.focus();
    }
    else{
         contador++;     //Sumamos 1 al contador de condiciones cumplidas
    }
    


    if (isNaN(f.edad.value)){                  //Comprobamos que no pongan letras en la edad
        alert("La edad no puede tener letras.")
    }
    else{
         contador++;     //Sumamos 1 al contador de condiciones cumplidas
    }
    


    if ( (edad.value<3) || (edad.value>99) ) {                 //Comprobamos que pongan una edad razonable (entre 3 y 99)    
        alert ("La edad tiene que estar entre 3 y 99");
        pass.focus();
    }
    else{
         contador++;     //Sumamos 1 al contador de condiciones cumplidas
    }
    
    

    if (email.value.length==0){              //Comprobamos que no deja el campo vacío
        alert("El campo EMAIL no puede estar vacío");
    }
    else{
         contador++;     //Sumamos 1 al contador de condiciones cumplidas
    }



/*
    if (!email.includes("@")) {     //No funciona
        alert ("No se ha introducido ningún correo valido");
        email.focus();
    }
    else{
         contador++;     //Sumamos 1 al contador de condiciones cumplidas
    }
*/



    if (frase.value.length>25) {                  //Comprobamos que la contraseña tiene 25 caracteres como máximo
        alert("La frase debe contener menos de 25 caracteres")
    }
    else{
         contador++;     //Sumamos 1 al contador de condiciones cumplidas
    }


    
    if (captcha.value.length==0){              //Comprobamos que no deja el campo vacío
        alert("El campo CAPTCHA no puede estar vacío");
    }
    else{
         contador++;     //Sumamos 1 al contador de condiciones cumplidas
    }



    if (captcha.value !="NJFDD"){           //Comprobamos que el Captcha que introduce el usuario es NJFDD, si no es, salta error
        alert ("El captcha es erróneo")
        captcha.focus();
    }
    else{
         contador++;     //Sumamos 1 al contador de condiciones cumplidas
    }



    if(!condiciones.checked){                  //Comprobamos que se haya marcado el botón de aceptar los terminos
        alert ("Debes aceptar los terminos de condiciones")
        condiciones.focus();
    }
    else{
         contador++;     //Sumamos 1 al contador de condiciones cumplidas
    }
    
    

    var usuario = {         //Creamos el objeto con los campos, rellenados con los datos que nos ha proporcionado el usuario
        nick: name.value,
        clave: clave.value,
        edad: edad.value,
        email: email.value
    }
    

    
    sessionStorage.userAlmacenado = usuario;
    

    
    if (!sessionStorage.datos) {
        console.log("No hay datos");
    }
    else{
        console.log("Hay datos");
    }
    
    

    if (contador == 19) {       // Se ejecuta el submit() si se han cumplido todas las condiciones
        f.submit();
    }
}