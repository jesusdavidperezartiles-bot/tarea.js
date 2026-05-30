let nombreProducto1 = "Television";
let precioUnitario1 = 16000;
let cantidadStock1 = 4;

let nombreProducto2 = "Bocina";
let precioUnitario2 = 5000;
let cantidadStock2 = 10;

let nombreProducto3 = "celular";
let precioUnitario3 = 12000;
let cantidadStock3 = 20;

let valorProducto1 = precioUnitario1 * cantidadStock1;
let valorProducto2 = precioUnitario2 * cantidadStock2;
let valorProducto3 = precioUnitario3 * cantidadStock3;

let valorTotalInventario = valorProducto1 + valorProducto2 + valorProducto3;

console.log("== SISTEMA BASICO DE INVENTARIO ==");

console.log("Producto 1 registrado: " + nombreProducto1);
console.log("Precio unitario del producto 1: $" + precioUnitario1);
console.log("Unidades disponibles del producto 1: " + cantidadStock1);

console.log("Producto 2 registrado: " + nombreProducto2);
console.log("Precio unitario del producto 2: $" + precioUnitario2);
console.log("Unidades disponibles del producto 2: " + cantidadStock2);

console.log("Producto 3 registrado: " + nombreProducto3);
console.log("Precio unitario del producto 3: $" + precioUnitario3);
console.log("Unidades disponibles del producto 3: " + cantidadStock3);

console.log("Valor total del inventario: $" + valorTotalInventario);