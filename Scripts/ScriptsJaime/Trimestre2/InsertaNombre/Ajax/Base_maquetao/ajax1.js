window.onload = function () {

    document.querySelector("input[type='button']").onclick = function () {
        this.disabled = true;

        //Paso 1: crear el objeto XMLHttpRequest
        let nombre_objeto; //variable que va a almacenar el objeto
        if (window.XMLHttpRequest) {
            nombre_objeto = new XMLHttpRequest();
        }
        else {
            nombre_objeto = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //Paso 2: crear la peticion de datos
        //Parámetros: el verbo, la direccion del recurso
        nombre_objeto.open('GET', "https://jsonplaceholder.typicode.com/users");

        //Paso 3: crear la funcion para manejar los datos que me llegan (se asocia al evento LOAD)
        nombre_objeto.addEventListener('load', function (datos) {
            let respuesta = JSON.parse(datos.target.response);

            // document.getElementById("parra").innerHTML = respuesta;
            document.querySelector("[type='button']").disabled = false;

            // for (let i = 0; i<respuesta.length; i++){
            //     for (const campo in respuesta[i]) {
            //         console.log(campo + ': '+ respuesta[i][campo]);
            //     }
            // }

            let div = document.createElement('div');

            for (const campo of respuesta) {

                let article = document.createElement("article");


                for (const datos in campo) {

                    let parrafo = document.createElement('p');

                    if (datos == "address") {           //Para sacar solo la calle
                        parrafo.textContent = datos;
                        article.appendChild(parrafo);

                        for (const direccion in campo[datos]) {

                            if (direccion == "street") {
                                parrafo.textContent += ": "+ campo[datos][direccion];
                                article.appendChild(parrafo);
                            }
                        }
                    }
                    else if(datos == "company") {

                        for (const compania in campo[datos]) {
                                parrafo.textContent +=": "+ campo[datos][compania];
                                article.appendChild(parrafo);
                            
                        }
                    }
                    
                    else {
                        parrafo.textContent = datos + ': ' + campo[datos]
                        article.appendChild(parrafo)
                    }
                }

                div.appendChild(article)
            }
            document.body.appendChild(div)
        });

        //Paso 4: enviar la peticion
        nombre_objeto.send();

        console.log("SOY EL ULTIMO");
    }
}