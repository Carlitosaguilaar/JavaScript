window.onload = function () {

    var campos = document.querySelectorAll("input[type='checkbox']");

    var boton = document.querySelector("input[type='button']");

    
    //Apartado A
    var f = document.forms[0];

    boton.onclick = function (){

        f.contenedor1.value = "";

        if (campos[0].checked == true) {
            
            f.contenedor1.value += "Tenis ";
        } 

        if(campos[1].checked == true){

            f.contenedor1.value += "Futbol ";
        }
        
        if(campos[2].checked == true){

            f.contenedor1.value += "Padel ";
        }
    }


    //Apartado B
    var f2 = document.forms[1];

    campos[3].oninput = function (){

        if (campos[3].checked == true) {

            f2.contenedor2.value += "Tenis ";
        }

        else if (campos[3].checked == false){

            if (campos[4].checked == true && campos[5].checked == true) {
                
                f2.contenedor2.value = "Futbol Padel ";
            }

            else if (campos[4].checked == false && campos[5].checked == true) {
                 
                f2.contenedor2.value = "Padel ";
            }

            else if (campos[4].checked == true && campos[5].checked == false) {
                 
                f2.contenedor2.value = "Futbol ";
            }

            else{

                f2.contenedor2.value = "";
            }
        }
    }

    campos[4].oninput = function (){

        if (campos[4].checked == true) {

            f2.contenedor2.value += "Futbol ";
        }

        else if (campos[4].checked == false){

            if (campos[3].checked == true && campos[5].checked == true) {
                
                f2.contenedor2.value = "Tenis Padel ";
            }

            else if (campos[3].checked == false && campos[5].checked == true) {
                 
                f2.contenedor2.value = "Padel ";
            }

            else if (campos[3].checked == true && campos[5].checked == false) {
                 
                f2.contenedor2.value = "Tenis ";
            }

            else{

                f2.contenedor2.value = "";
            }
        }
    }

    campos[5].oninput = function (){

        if (campos[5].checked == true) {

            f2.contenedor2.value += "Padel ";
        }

        else if (campos[5].checked == false){

            if (campos[3].checked == true && campos[4].checked == true) {
                
                f2.contenedor2.value = "Tenis Futbol ";
            }

            else if (campos[3].checked == false && campos[4].checked == true) {
                 
                f2.contenedor2.value = "Futbol ";
            }

            else if (campos[3].checked == true && campos[4].checked == false) {
                 
                f2.contenedor2.value = "Tenis ";
            }

            else{

                f2.contenedor2.value = "";
            }
        }
    }

}