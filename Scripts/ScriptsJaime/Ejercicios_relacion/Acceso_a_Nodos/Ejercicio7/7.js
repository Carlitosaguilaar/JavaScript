window.onload = function () {
    var tabla = document.getElementById("tabla");
    tabla.setAttribute=("backgroundColor", "white");
    tabla.setAttribute=("Width", "100px");
    tabla.setAttribute=("Height", "100px");
    tabla.setAttribute=("border", "2px");


    var celdas = document.getElementsByTagName("td");
    var colores = ["blue", "red", "orange", "yellow"];
    for (let i=0; i<celdas.length; i++){
            celdas[i].onclick=function(){                     

            if (this.style.backgroundColor == "" || this.style.backgroundColor == "white") {
                this.style.backgroundColor = "black";

            }
            else if (this.style.backgroundColor == "black") {
                this.style.backgroundColor = colores[0];       
            }

            else if (this.style.backgroundColor == colores[0]) {
                this.style.backgroundColor = colores[1];
            }

            else if (this.style.backgroundColor == colores[1]) {
                this.style.backgroundColor = colores[2];
            }

            else if (this.style.backgroundColor == colores[2]) {
                this.style.backgroundColor = colores[3];
            }

            else{
                this.style.backgroundColor =colores[0];
            }
        }
    }
}

