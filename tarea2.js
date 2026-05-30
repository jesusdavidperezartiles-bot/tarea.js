let productos = [
  { nombre: "Laptop", precio: 22000, stock: 4 },
  { nombre: "Bocina", precio: 500, stock: 10 },
  { nombre: "Celular", precio: 15000, stock: 20 }
];

let valorTotalInventario = 0;

console.log("== SISTEMA BASICO DE INVENTARIO ==");

productos.forEach(p => {
  let valor = p.precio * p.stock;
  valorTotalInventario += valor;
  console.log(`Producto registrado: ${p.nombre}`);
  console.log(`Precio unitario: $${p.precio}`);
  console.log(`Unidades disponibles: ${p.stock}`);
});

console.log(`Valor total del inventario: $${valorTotalInventario}`);
