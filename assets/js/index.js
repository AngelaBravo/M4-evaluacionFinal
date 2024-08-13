function Producto(nombre, precio, cantidad) {
    let _nombre = nombre || null;
    let _precio = precio || 0;
    let _cantidad = cantidad || 0;
    Object.defineProperties(this, {
        nombre: {
            get: function () {
                return _nombre;
            },
            set: function (new_nombre) {
                _nombre = new_nombre;
            }
        },
        precio: {
            get: function () {
                return _precio;
            },
            set: function (new_precio) {
                _precio = new_precio;
            }
        },
        cantidad: {
            get: function () {
                return _cantidad;
            },
            set: function (new_cantidad) {
                _cantidad = new_cantidad;
            }
        },
    })
}

Producto.prototype.calculoSubTotal = function () {
    return (this.precio * this.cantidad);
}
function Carrito(productos) {
    let _productos = productos || [];
    Object.defineProperties(this, {
        productos: {
            get: function () {
                return _productos;
            }
        }
    })
}


Carrito.prototype.agregarProducto = function (prod) {
    this.productos.push(prod);
}

Carrito.prototype.calcularTotal = function () {
    let total = 0;
    this.productos.forEach(function (p) {
        total += p.calculoSubTotal();
    })
    return total;
}

const catalogo = [
    {
        nombre: "Leche",
        precio: "1000",
    },
    {
        nombre: "Pan de Molde",
        precio: "2000",
    },
    {
        nombre: "Queso",
        precio: "1200",
    },
    {
        nombre: "Mermelada",
        precio: "890",
    },
    {
        nombre: "Azucar",
        precio: "1300",
    },
];

const carrito = new Carrito();

function mostrarCatalogo() {
    prod = Number(prompt("Catalogo: Elija la opción del 1 al 5:\n 1= " + (catalogo[0].nombre) + ": $" + (catalogo[0].precio) +
        "\n 2= " + (catalogo[1].nombre) + ": $" + (catalogo[1].precio) +
        "\n 3= " + (catalogo[2].nombre) + ": $" + (catalogo[2].precio) +
        "\n 4= " + (catalogo[3].nombre) + ": $" + (catalogo[3].precio) +
        "\n 5= " + (catalogo[4].nombre) + ": $" + (catalogo[4].precio)));
    while ((prod != 1) && (prod != 2) && (prod != 3) && (prod != 4) && (prod != 5)) {
        alert("El producto no está en stock. Intentelo nuevamente");
        mostrarCatalogo()
    }
}

function finalizarCompra() {
    confirm("el total hasta ahora es: $ " + carrito.calcularTotal() + "\n Vamos al siguiente paso: Pagar")
}

function detalleCompra(producto, carrito, cant) {
    return prompt("Se agregaron " + cant + " unidades de " + producto.nombre + ". El monto de eso es: $ " + producto.calculoSubTotal() + "\n A pagar hasta ahora $ " + carrito.calcularTotal() + "\n Desea seguir comprando? Responda 'si' o 'no'");
}


let comprar = "si"
do {
    mostrarCatalogo();
    let cant = parseInt(prompt("Indique la cantidad que desea comprar"))
    while (cant <= 0 || isNaN(cant) == true) {
        alert("Ingrese solo numeros enteros positivos, por favor");
        cant = parseInt(prompt("Indique la cantidad que desea comprar"))
    }
    const producto = new Producto(catalogo[prod - 1].nombre, catalogo[prod - 1].precio, cant);
    carrito.agregarProducto(producto);
    comprar = detalleCompra(producto, carrito, cant)
    while (comprar != "si" && comprar != "no") {
        alert("Solo responda 'si' o 'no'")
        comprar = prompt("Se agregaron " + cant + " unidades de " + producto.nombre + ". El monto de eso es: $ " + producto.calculoSubTotal() + "\n A pagar hasta ahora $ " + carrito.calcularTotal() + "\n Desea seguir comprando? Responda 'si' o 'no'");
    }
} while (comprar !== "no");

finalizarCompra()


