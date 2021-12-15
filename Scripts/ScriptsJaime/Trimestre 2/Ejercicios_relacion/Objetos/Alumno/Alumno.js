//Ejercicio 1

var t1 = {
    nombre: "Yeimi",
    edad: 40,
    dni: "12345678P",
    titulo_universitario: "ing_software"        
}

var t2 = {
    nombre: "ErFasilito",
    edad: 80,
    dni: "11122233F",
    titulo_universitario: "GradoMedio"        
}

var a1 = {
    nombre:"Clientes",
    curso: 2, 
    horas: 6
}

var a2 = {
    nombre:"Servidores",
    curso: 2,
    horas: 8
}

var a3 = {
    nombre:"Interfaces",
    curso: 2,
    horas: 8
}

var a4 = {
    nombre:"Despliegue",
    curso: 2,
    horas: 3
}


var a = [a1, a2, a3, a4]
var t = [t1, t2]

var alumno = {
    nombre: "Carlos", 
    edad: 21,
    ciclo :"daw",
    curso: 2,
    tutor: t,
    asignatura: a,
    notamedia: 5
    
}

//Ejercicio 2
window.onload = function pantalla() {
    var dedo = document.querySelector("body")
    var caja = document.createElement("div")
    dedo.appendChild(caja)
    var dedo2 = document.querySelector("div")
    dedo2.innerHTML = muestradatos();
    
        
    
document.body.appendChild(caja)
}

//Ejercicio 3


function mostrar() {
    var numprofe = prompt ("Hay dos profesores, de cual quieres obtener toda la información? Introduce el numero (1- Yeimi, 2- ErFasilito)");
    if (numprofe == 1) {

        
        
    }
    else if (numprofe ==2){

    }

    
    var cadena = ""
    
}



function cambiarNombre(nuevonombre) {
    var numprofe = prompt ("Hay dos profesores, de cual quieres cambiar el nombre? Introduce el numero. 1- "+t1.nombre+", 2- "+t2.nombre);
    var nombreantiguo = "";

        if (numprofe == 1) {
            let nuevonombre = prompt ("¿Cuál es el nuevo nombre que quieres ponerle a "+t1.nombre+"?");
            nombreantiguo = t1.nombre;
            t1.nombre = nuevonombre;
            alert ("El nombre ha sido cambiado de "+nombreantiguo+ " a "+nuevonombre)

        }
        else if (numprofe == 2) {
            let nuevonombre = prompt ("¿Cuál es el nuevo nombre que quieres ponerle a "+t2.nombre+"?");
            nombreantiguo = t2.nombre;
            t2.nombre = nuevonombre;
            alert ("El nombre ha sido cambiado de "+nombreantiguo+ " a "+nuevonombre)
     
        }


    
}

//Ejercicio 4

// cambiarHoras(nueva): permite cambiar el número de horas del objeto.

function cambiarHoras() {
    var numasignatura = prompt ("De qué asignatura quieres modificar el número de horas? (Inserta el número: 1-"+a1.nombre+", 2-"+ a2.nombre+", 3-"+a3.nombre+", 4-"+a4.nombre+")")
    switch (numasignatura) {
        case 1:
            let nuevashoras = prompt ("Cual es el nuevo numero de horas?")
            
            break;
    
        default:
            break;
    }
    
}