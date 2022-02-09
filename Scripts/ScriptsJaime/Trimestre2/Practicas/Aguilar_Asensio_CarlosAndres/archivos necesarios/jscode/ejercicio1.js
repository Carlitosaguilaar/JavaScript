window.onload = function(){

    document.querySelector("[type='button']").onclick = function(){
        this.disabled = true;

        //Creamos el objeto XMLHttpRequest
        let user; //variable que va a almacenar el objeto
        if(window.XMLHttpRequest){
            user = new XMLHttpRequest();
        }
        else{
            user = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //Pedimos los datos
        user.open('GET',"https://randomuser.me/api");

        //Función para manejar los datos 
        user.addEventListener('load',function(datos){
            let respuesta = JSON.parse(datos.target.response);
            document.querySelector("[type='button']").disabled = false;
      
            //Apartado A
            console.log("Apartado A")
            for (const datos in respuesta) {
                console.log(respuesta[datos]);
            }
            
            //Apartado B

            console.log("Apartado B");
    
            let div = document.querySelector('div');

            for (const campo of Object.keys(respuesta)) {


                let artic = document.createElement('article');
                artic.className = 'usuario';


                for (const datos in campo) {

                    div.appendChild(artic);
                    let parrafo = document.createElement('p');

                    for (const name in campo[datos]) {

                        if (name == "first") {
                            parrafo.textContent += name;
                        }
                        if (name == "last"){
                            parrafo.textContent += name;
                        }
                    }
                    
                    for (const dob in campo[datos]) {

                        if (dob == "age") {
                            parrafo.textContent += dob+" años";
                        }
                    }

                    for (const pictures in campo[datos]) {
                        if (pictures == "medium") {
                            parrafo.textContent += pictures;
                        }
                        
                    }                    
                }
                artic.appendChild(parrafo);          
            }

            document.body.appendChild(div);
        });

        //Paso 4: enviar la peticion
        user.send();
    }
}