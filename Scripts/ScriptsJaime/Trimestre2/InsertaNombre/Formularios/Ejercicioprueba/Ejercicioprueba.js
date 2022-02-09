window.onload=function () {
    var formu = document.forms[0];

    var submit = formu.campoSubmit;

    submit.onclick=function(e) {
        e.preventDefault();
        validar();
    }
}

function validar() {
    var formu = document.forms[0];
    var nombre = formu.campo1;
    var pass = formu.campo2;
    var confirm = formu.campo3;
    if(nombre.value=="" || nombre.value.length==0){
        alert("Rellena el campo");
        nombre.focus();
        nombre.style.border="4px solid red";
        nombre.onchange=function () {
            nombre.style.border="4px solid green";
            return
        }
    }
    else{
        nombre.style.border = "4px solid green"
    }
    
    if(pass.value.length<5){
        alert("La contraseña debe de tener, al menos, 5 caracteres.");
        pass.focus();
        pass.addEventListener("change",()=>{
            pass.style.border="4px solid green"
        })

        pass.style.border="4px solid red";
        return
    }
    if (confirm.value != pass.value){
        alert("Compruebe la contraseña que ha introducido, no son iguales");
        confirm.focus();
        confirm.addEventListener("change",()=>{
            confirm.style.border="4px solid green"
        })
        confirm.style.border="4px solid red";
        return
    }

    formu.submit();
}