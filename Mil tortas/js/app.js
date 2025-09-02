document.addEventListener('DOMContentLoaded', function () {
    inicializarNavegacion();
    actualizarContadorCarrito();

    if (document.getElementById('productos-grid')) {
        cargarProductos();
    }
    
    if (document.getElementById('destacados-grid')) {
        cargarProductosDestacados();
    }

    if (document.getElementById('carrito-pagina')) {
    carrito.actualizarVistaCarrito();

    const finalizarCompraBtn = document.getElementById('finalizar-compra-btn');
    if (finalizarCompraBtn) {
        finalizarCompraBtn.addEventListener('click', () => {
            carrito.finalizarCompra();
        });
    }
}

    document.addEventListener('click', (e) => {
        const botonAgregar = e.target.closest('.agregar-carrito-btn');
        if (botonAgregar) {
            const productoId = botonAgregar.dataset.id;
            carrito.agregarAlCarrito(parseInt(productoId));
        }
    });

});


function inicializarNavegacion() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function actualizarContadorCarrito() {
    const contador = document.getElementById('contador-carrito');
    if (contador) {
        const carritoActual = storage.obtenerCarrito();
        const cantidadTotal = carritoActual.reduce((total, item) => total + item.cantidad, 0);
        contador.textContent = cantidadTotal;
    }
}

function cargarProductosDestacados() {
    const productosDestacados = productosData.obtenerProductosDestacados();
    const grid = document.getElementById('destacados-grid');

    if (grid) {
        grid.innerHTML = '';

        productosDestacados.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.classList.add('producto-card');
            productoElement.innerHTML = `
                <div class="producto-img">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <span class="producto-categoria">${productosData.obtenerNombreCategoria(producto.categoria)}</span>
                </div>
                <div class="producto-info">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <span class="producto-precio">$${producto.precio.toLocaleString('es-CL')}</span>
                    <button class="agregar-carrito-btn" data-id="${producto.id}">Agregar al Carrito</button>
                </div>
            `;
            grid.appendChild(productoElement);
        });
    }
}

function cargarProductos() {
    const productos = productosData.obtenerTodos();
    const grid = document.getElementById('productos-grid');
    if (grid) {
        grid.innerHTML = '';

        productos.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.classList.add('producto-card');
            productoElement.innerHTML = `
                <div class="producto-img">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <span class="producto-categoria">${productosData.obtenerNombreCategoria(producto.categoria)}</span>
                </div>
                <div class="producto-info">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <span class="producto-precio">$${producto.precio.toLocaleString('es-CL')}</span>
                    <button class="agregar-carrito-btn" data-id="${producto.id}">Agregar al Carrito</button>
                </div>
            `;
            grid.appendChild(productoElement);
        });
    }
}