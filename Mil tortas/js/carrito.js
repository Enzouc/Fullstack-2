// carrito.js - Funcionalidad del carrito
const carrito = {
    // Agregar producto al carrito
    agregarAlCarrito: function (id) {
        const producto = productosData.obtenerPorId(id);

        if (!producto) return;

        let carrito = storage.obtenerCarrito();
        const productoEnCarrito = carrito.find(item => item.id === id);

        if (productoEnCarrito) {
            productoEnCarrito.cantidad++;
        } else {
            carrito.push({
                ...producto,
                cantidad: 1
            });
        }

        storage.guardarCarrito(carrito);
        actualizarContadorCarrito();

        // Mostrar mensaje de confirmación
        alert(`¡${producto.nombre} agregado al carrito!`);
    },

    // Eliminar producto del carrito
    eliminarDelCarrito: function (id) {
        let carrito = storage.obtenerCarrito();
        carrito = carrito.filter(item => item.id !== id);
        storage.guardarCarrito(carrito);
        this.actualizarVistaCarrito();
        actualizarContadorCarrito();
    },

    // Actualizar cantidad de producto en el carrito
    actualizarCantidad: function (id, nuevaCantidad) {
        if (nuevaCantidad < 1) return;

        let carrito = storage.obtenerCarrito();
        const producto = carrito.find(item => item.id === id);

        if (producto) {
            producto.cantidad = nuevaCantidad;
            storage.guardarCarrito(carrito);
            this.actualizarVistaCarrito();
            actualizarContadorCarrito();
        }
    },

    // Actualizar la vista del carrito
    actualizarVistaCarrito: function () {
        const carritoItems = document.getElementById('carrito-items');
        const totalPrecio = document.getElementById('total-precio');

        if (carritoItems && totalPrecio) {
            const carrito = storage.obtenerCarrito();
            let total = 0;

            carritoItems.innerHTML = '';

            carrito.forEach(item => {
                const itemTotal = item.precio * item.cantidad;
                total += itemTotal;

                const itemElement = document.createElement('div');
                itemElement.classList.add('carrito-item');
                itemElement.innerHTML = `
                    <div class="carrito-item-info">
                        <h4>${item.nombre}</h4>
                        <p>$${item.precio.toLocaleString('es-CL')} c/u</p>
                    </div>
                    <div class="carrito-item-cantidad">
                        <button class="disminuir" data-id="${item.id}">-</button>
                        <span>${item.cantidad}</span>
                        <button class="aumentar" data-id="${item.id}">+</button>
                        <button class="eliminar" data-id="${item.id}">🗑️</button>
                    </div>
                `;
                carritoItems.appendChild(itemElement);
            });

            totalPrecio.textContent = total.toLocaleString('es-CL');

            // Agregar event listeners a los botones
            this.agregarEventListenersCarrito();
        }
    },

    // Agregar event listeners a los botones del carrito
    agregarEventListenersCarrito: function () {
        const botonesAumentar = document.querySelectorAll('.aumentar');
        const botonesDisminuir = document.querySelectorAll('.disminuir');
        const botonesEliminar = document.querySelectorAll('.eliminar');

        botonesAumentar.forEach(boton => {
            boton.addEventListener('click', function () {
                const id = parseInt(this.getAttribute('data-id'));
                const carrito = storage.obtenerCarrito();
                const producto = carrito.find(item => item.id === id);
                if (producto) {
                    carrito.actualizarCantidad(id, producto.cantidad + 1);
                }
            });
        });

        botonesDisminuir.forEach(boton => {
            boton.addEventListener('click', function () {
                const id = parseInt(this.getAttribute('data-id'));
                const carrito = storage.obtenerCarrito();
                const producto = carrito.find(item => item.id === id);
                if (producto && producto.cantidad > 1) {
                    carrito.actualizarCantidad(id, producto.cantidad - 1);
                }
            });
        });

        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', function () {
                const id = parseInt(this.getAttribute('data-id'));
                carrito.eliminarDelCarrito(id);
            });
        });
    },

    // Finalizar compra
    finalizarCompra: function () {
        const carrito = storage.obtenerCarrito();

        if (carrito.length === 0) {
            alert('El carrito está vacío. Agrega productos antes de finalizar la compra.');
            return;
        }

        alert('¡Compra realizada con éxito! Gracias por tu pedido.');
        storage.limpiarCarrito();
        this.actualizarVistaCarrito();
        actualizarContadorCarrito();
    }
};