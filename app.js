function totalapagar(){
    var categoria = document.getElementById("categoria").value;
    switch(categoria){
        case "estudiante":
            var descuento = 80;
            break;
        case "trainee":
            var descuento = 50;
            break;
        case "junior":
                var descuento = 15;
                break;
    }
    var Cantidad = document.getElementById("cantidad").value;
    var total = (Cantidad * 200)-((Cantidad*200)*descuento)/100;
    document.getElementById("pagar").innerHTML = "Total a Pagar: $" + total;
}