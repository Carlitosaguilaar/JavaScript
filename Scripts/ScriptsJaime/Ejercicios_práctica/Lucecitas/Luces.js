window.onload = function () {
    
    var cajitas = document.querySelector("div")
    
    for (let i=0; i < cajitas.length; i ++){
        cajitas[i].onclick=function(){

            if (this.style.backgroundColor == "gray") {
                this.style.backgroundColor = "yellow";
            }



        }
    
    }

}