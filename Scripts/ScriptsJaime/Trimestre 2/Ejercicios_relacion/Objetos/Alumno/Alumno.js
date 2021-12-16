//Ejercicio 1
var tutores = [
    {
        nombre: "Javi",
        edad: 38,
        dni: "12345678B",
        titulo_uni: "Ingeniería electrica"
    },
    {
        nombre: "Jaime",
        edad: 40,
        dni: "87654321C",
        titulo_uni: "Ingeniería de software"
    }
]

var asignaturas = [ 
    {
        nombre: "Desarrollo en entorno de servidores",
        curso: 2,
        horas: 300
    },
    {
        nombre: "Desarrollo en entorno de clientes",
        curso: 2,
        horas: 300
    },
    {
        nombre: "Despliegue de aplicaciones web",
        curso: 2,
        horas: 150
    },
    {
        nombre: "Diseño de interfaces",
        curso: 2,
        horas: 300
    }
]

var alumno = {
    nombre: "Carlos", 
    edad: 21,
    ciclo: "daw",
    curso: 2,
    tutor: tutores,
    asignatura: asignaturas,
    notas: [6.75,6,8,10]
    
}

//Ejercicio 2
window.onload = function pantalla() {
    var caja = document.createElement("div")
    document.querySelector("body").appendChild(caja)

    for (let campo in alumno){
        let nuevoSpan = document.createElement("span")
        let texto;

        switch (campo) {
            case "tutor":
                texto ="";
                for (let datos in alumno[campo]) {
                    texto += alumno[campo][datos]+" "; 
                }
                break;

            case "asignatura":
                for (let ind of alumno[campo]){ 
                    texto += ind.nombre+" ";
                }
                break;
            
            case "notas":
                let suma=0;
                for (let ind of alumno[campo]){
                    suma+=ind
                }
                texto = "La media es: "+(suma/alumno[campo].length);
                break;
            default:
                
                texto = document.createTextNode(alumno[campo]);
        }

        let nodoTexto = document.createTextNode(texto);
        
        nuevoSpan.appendChild(nodoTexto)
        caja.appendChild(nuevoSpan)
    }
}

//Ejercicio 3


function mostrar() {
    var numprofe = prompt ("Hay dos profesores, de cual quieres obtener toda la información? Introduce el numero (1- Jaime, 2- Javi)");
    if (numprofe == 1) {

       
    }
    else if (numprofe ==2){

    }
    var cadena = ""    
}

function cambiarNombre(nuevonombre) {
    var numprofe = prompt ("Hay dos profesores, de cual quieres cambiar el nombre? Introduce el numero. 1- "+tutores[0].nombre+", 2- "+tutores[1].nombre);
    var nombreantiguo = "";

        if (numprofe == 1) {
            let nuevonombre = prompt ("¿Cuál es el nuevo nombre que quieres ponerle a "+tutores[0].nombre+"?");
            nombreantiguo = tutores[0].nombre;
            tutores[0].nombre = nuevonombre;
            alert ("El nombre ha sido cambiado de "+nombreantiguo+ " a "+nuevonombre)

        }
        else if (numprofe == 2) {
            let nuevonombre = prompt ("¿Cuál es el nuevo nombre que quieres ponerle a "+tutores[1].nombre+"?");
            nombreantiguo = tutores[1].nombre;
            tutores[1].nombre = nuevonombre;
            alert ("El nombre ha sido cambiado de "+nombreantiguo+ " a "+nuevonombre)
     
        }

}
//Ejercicio 4

function mostrar() {
    
}

function cambiarHoras() {
    var numasignatura = 0;
    numasignatura = prompt ("De qué asignatura quieres modificar el número de horas? (Inserta el número: 1-"+asignaturas[0].nombre+", 2-"+ asignaturas[1].nombre+", 3-"+asignaturas[2].nombre+", 4-"+a4.nombre+")")
    var horasantiguas = 0;
    var nuevashoras = 0;

    if (numasignatura == 1) {
        nuevashoras = prompt ("Cual es el nuevo numero de horas?");
        horasantiguas = asignaturas[0].horas;
        asignaturas[0].horas = nuevashoras;
        alert ("Las horas de la asignatura "+asignaturas[0].nombre+" han cambiado de "+horasantiguas+" a "+nuevashoras)
    }

    else if (numasignatura == 2) {
        nuevashoras = prompt ("Cual es el nuevo numero de horas?");
        horasantiguas = asignaturas[1].horas;
        asignaturas[1].horas = nuevashoras;
        alert ("Las horas de la asignatura "+asignaturas[1].nombre+" han cambiado de "+horasantiguas+" a "+nuevashoras)
    }
    else if (numasignatura == 3) {
        nuevashoras = prompt ("Cual es el nuevo numero de horas?");
        horasantiguas = asignaturas[2].horas;
        asignaturas[2].horas = nuevashoras;
        alert ("Las horas de la asignatura "+asignaturas[2].nombre+" han cambiado de "+horasantiguas+" a "+nuevashoras)
    }
    else if (numasignatura == 4){
        nuevashoras = prompt ("Cual es el nuevo numero de horas?");
        horasantiguas = a4.horas;
        a4.horas = nuevashoras;
        alert ("Las horas de la asignatura "+asignaturas[3].nombre+" han cambiado de "+horasantiguas+" a "+nuevashoras)
    } else{
        alert ("ERROR, pulse el botón otra vez introduciendo un número válido")
    }
}
    
//Ejercicio 5

function calcularMedia() {
    var notafinal = 0;
    alert ("Vamos a calcular la nota final del alumno "+alumno.nombre);
    notafinal = (alumno.notas[0] + alumno.notas[1] + alumno.notas[2] + alumno.notas[3]) / 4;

    alert ("La nota media de "+alumno.nombre+" es "+notafinal)
}

function MediaAsignatura() {

}

function mostrar() {
    
}