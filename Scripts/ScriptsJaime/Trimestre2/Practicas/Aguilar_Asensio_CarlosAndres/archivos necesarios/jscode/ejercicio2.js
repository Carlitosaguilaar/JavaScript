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

        //Apartado A
        user.open('GET',"http://www.jaimeweb.es/medac/datos.json");

        //Función para manejar los datos 
        user.addEventListener('load',function(datos){
            let res = JSON.parse(datos.target.response);

            document.querySelector("[type='button']").disabled = false;
      
            //Apartado B

            console.log("Apartado B");

            for (const datos in res) {
                console.log(res[datos]);
            }

            //Apartado C

            console.log ("Apartado C");
            for (var i=0; i<= res.length;i++ ) {

                console.log(res[i].id);                         //Pedimos unicamente el valor del campo id
                console.log(res[i].nombre);                     //Pedimos unicamente el valor del campo nombre
                console.log(res[i].email);                      //Pedimos unicamente el valor del campo email
                console.log(res[i].estado);                     //Pedimos unicamente el valor del campo estado

               }

        });

        user.send();                                //Enviamos la petición
    }
}