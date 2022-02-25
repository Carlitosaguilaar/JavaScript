function check(lista, valores) {
    var lista = [1,2,3,4,5,6,7,8,9];

    valores = prompt ("Dime el número que quieres comprobar que se encuentra en el Array")

    
    for (let i = 0; i <= lista.length; i++){
        if (valores == lista[i]) {
            return "Verdadero";
        }
    }
    return "Falso";
}

    alert (check())

