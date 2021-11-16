window.onload = function () {
    var tabla = document.getElementById("tabla");
    tabla.setAttribute=("backgroundColor", "white");
    tabla.setAttribute=("Width", "400px");
    tabla.setAttribute=("Height", "400px");
    tabla.setAttribute=("border", "2px");


    var celdas = document.getElementsByTagName("td");
    for (let i=0; i<celdas.length; i++){
            celdas[i].onmouseover=function(){                     

            if (this.style.backgroundColor == "" || this.style.backgroundColor == "white") {
                this.style.backgroundColor = "black";

            }
            else if (this.style.backgroundColor == "black") {
                    this.style.backgroundColor = "white"       
            }
        }
    }
}

