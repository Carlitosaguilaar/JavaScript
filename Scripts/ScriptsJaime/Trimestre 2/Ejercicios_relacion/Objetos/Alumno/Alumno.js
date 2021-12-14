//Ejercicio 1

var tutor1 = {
    nombre: "Yeimi",
    edad: 40,
    dni: "12345678P",
    titulo_universitario: "ing_software"        
}

var tutor2 = {
    nombre: "ErFasilito",
    edad: 80,
    dni: "11122233F",
    titulo_universitario: "GradoMedio"        
}

var asignatura1 = {
    nombre:"Clientes",
    curso: 2, 
    horas: 6
}

var asignatura2 = {
    nombre:"Servidores",
    curso: 2,
    horas: 8
}

var asignatura3 = {
    nombre:"Interfaces",
    curso: 2,
    horas: 8
}

var asignatura4 = {
    nombre:"Despliegue",
    curso: 2,
    horas: 3
}


var asignaturas = [asignatura1, asignatura2, asignatura3, asignatura4]
var tutores = [tutor1, tutor2]

var alumno = {
    nombre: "Carlos", 
    edad: 21,
    ciclo :"daw",
    curso: 2,
    tutor: tutores,
    asignatura: asignaturas,
    notamedia: 5
    
}

//Ejercicio 2
window.onload = function pantalla() {
    var dedo = document.querySelector("body")
    var caja = document.createElement("div")
    dedo.appendChild(caja)
    var dedo2 = document.querySelector("div")
    dedo2.innerHTML = muestradatos();
    
        
    function muestradatos() {        
        alumno.forEach(element => {
            
        });
    }

document.body.appendChild(caja)
}
