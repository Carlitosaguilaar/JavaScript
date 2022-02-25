window.onload = function(){

    var s = document.querySelector("section");
    var p = document.querySelector("p");
    var a = document.querySelector("a");

    s.addEventListener ("click",function () {
        alert("Se ha cambiado el color de fondo a negro")
        s.style.backgroundColor = "black";         
    },false)

    p.addEventListener ("click",function () {
        alert("Se ha cambiado el width del parrafo")
        p.style.width = "500px";
    },false)

    a.addEventListener ("click",function () {
        confirm ("¿Quieres moverte a la página enlazada?");
        a.stopPropagation();
        
    },true)
}