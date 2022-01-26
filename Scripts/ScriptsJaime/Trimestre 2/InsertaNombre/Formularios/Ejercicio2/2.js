window.onload=function(){

    var f = document.formulario;

    f.primero.oninput=function(){

        var letra=f.primero.value;
        
        f.segundo.value=letra;
    }
}