function cambiarlista(num) {
    var listas = document.querySelectorAll("ul");
    listas[num].style.position = "relative";
    listas[num].style.visibility = "visible";

    for (let i = 1; i <=listas.length(); i++) {
        if (i!=num) {
            listas[i].style.position = "absolute";
            listas[i].style.visibility="hidden";
        } 
    }
}