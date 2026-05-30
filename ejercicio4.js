const numerodeProductos = 19
let mensaje = ""

if(numerodeProductos == 0 ){
    mensaje = "Alerta, te quedaste sin productos"
    console.log(mensaje)
    return false
} else if (numerodeProductos < 5){
    mensaje = "Cuidado, te quedan pocos productos"
    console.log(mensaje)
    return false
} 
 if (numerodeProductos >= 5){
    mensaje = "Tienes suficientes productos en stock"
    console.log(mensaje)
    return false
}

console.log(mensaje)