window.onload() = function (){
    
    var dedo = document.querySelector("h1");
    var boton = document.querySelector("input");

    boton.onclick = function () {
        localStorage.visitas = 0;
    }


    if (!localStorage.visitas) localStorage.visitas = 0;

    localStorage.visitas++;
    dedo.textContent = "Llevas "+localStorage.visitas+ " visitas";
}