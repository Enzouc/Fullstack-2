const carrito = {
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

        alert(`¡${producto.nombre} agregado al carrito!`);
    },

    eliminarDelCarrito: function (id) {
        let carritoActual = storage.obtenerCarrito();
        carritoActual = carritoActual.filter(item => item.id !== id);
        storage.guardarCarrito(carritoActual);
        this.actualizarVistaCarrito();
        actualizarContadorCarrito();
    },

    actualizarCantidad: function (id, nuevaCantidad) {
        if (nuevaCantidad < 1) return;

        let carritoActual = storage.obtenerCarrito();
        const producto = carritoActual.find(item => item.id === id);

        if (producto) {
            producto.cantidad = nuevaCantidad;
            storage.guardarCarrito(carritoActual);
            this.actualizarVistaCarrito();
            actualizarContadorCarrito();
        }
    },

    actualizarVistaCarrito: function () {
        const carritoItems = document.getElementById('carrito-items');
        const totalPrecio = document.getElementById('total-precio');
        let total = 0;

        // Limpiar el contenido actual del carrito
        carritoItems.innerHTML = '';

        const carritoActual = storage.obtenerCarrito();

        if (carritoActual.length === 0) {
            carritoItems.innerHTML = '<p class="text-center">Tu carrito está vacío.</p>';
            if (totalPrecio) {
                totalPrecio.textContent = `$${total.toLocaleString('es-CL')}`;
            }
            return;
        }

        carritoActual.forEach(item => {
            total += item.precio * item.cantidad;
            const divItem = document.createElement('div');
            divItem.classList.add('carrito-item');
            divItem.innerHTML = `
                <div class="carrito-item-info">
                    <h4>${item.nombre}</h4>
                    <p>Precio: $${item.precio.toLocaleString('es-CL')}</p>
                </div>
                <div class="carrito-item-cantidad">
                    <button class="btn-cantidad disminuir" data-id="${item.id}">-</button>
                    <span>${item.cantidad}</span>
                    <button class="btn-cantidad aumentar" data-id="${item.id}">+</button>
                </div>
                <button class="carrito-item-eliminar" data-id="${item.id}">Eliminar</button>
            `;
            carritoItems.appendChild(divItem);
        });

        if (totalPrecio) {
            totalPrecio.textContent = `$${total.toLocaleString('es-CL')}`;
        }
        
        // Se agregan los event listeners después de crear los botones
        this.agregarEventListenersCarrito();
    },

    agregarEventListenersCarrito: function () {
        const botonesAumentar = document.querySelectorAll('.aumentar');
        const botonesDisminuir = document.querySelectorAll('.disminuir');
        const botonesEliminar = document.querySelectorAll('.carrito-item-eliminar');

        botonesAumentar.forEach(boton => {
            boton.addEventListener('click', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'));
                const carritoActual = storage.obtenerCarrito();
                const producto = carritoActual.find(item => item.id === id);
                if (producto) {
                    // Llamada correcta a la función del objeto 'carrito'
                    this.actualizarCantidad(id, producto.cantidad + 1);
                }
            });
        });

        botonesDisminuir.forEach(boton => {
            boton.addEventListener('click', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'));
                const carritoActual = storage.obtenerCarrito();
                const producto = carritoActual.find(item => item.id === id);
                if (producto && producto.cantidad > 1) {
                    // Llamada correcta a la función del objeto 'carrito'
                    this.actualizarCantidad(id, producto.cantidad - 1);
                }
            });
        });

        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'));
                // Llamada correcta a la función del objeto 'carrito'
                this.eliminarDelCarrito(id);
            });
        });
    },

    finalizarCompra: function () {
        const carritoActual = storage.obtenerCarrito();

        if (carritoActual.length === 0) {
            alert('El carrito está vacío. Agrega productos antes de finalizar la compra.');
            return;
        }

        alert('¡Compra realizada con éxito! Gracias por tu pedido.');
        storage.limpiarCarrito();
        this.actualizarVistaCarrito();
        actualizarContadorCarrito();
    }
};