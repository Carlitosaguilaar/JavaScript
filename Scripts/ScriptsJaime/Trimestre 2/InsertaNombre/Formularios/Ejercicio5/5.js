window.onload = function () {
    var campo = document.querySelectorAll("input[type='button']");
    campo[0].onclick = function (e) {
        e.preventDefault();
        anagrama();
    };    
}

function anagrama() {
    var campos = document.querySelectorAll("input[type='text']");
    if (campos[0].value.toLowerCase().split("").sort().join("") === campos[1].value.toLowerCase().split("").sort().join("")){
        alert("Estas dos palabras son anagramas");
    }
    else{
        alert("Ups, estas dos palabras no son anagramas");
    }
}