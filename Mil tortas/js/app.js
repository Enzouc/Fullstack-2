// app.js - Funcionalidades comunes para todas las páginas
document.addEventListener('DOMContentLoaded', function () {
    // Inicializar funcionalidades comunes
    inicializarNavegacion();
    actualizarContadorCarrito();

    // Cargar productos destacados en la página de inicio
    if (document.getElementById('destacados-grid')) {
        cargarProductosDestacados();
    }
});

// Función para inicializar la navegación
function inicializarNavegacion() {
    // Marcar la página activa en el menú de navegación
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

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
    const contador = document.getElementById('contador-carrito');
    if (contador) {
        const carrito = storage.obtenerCarrito();
        const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);
        contador.textContent = cantidadTotal;
    }
}

// Función para cargar productos destacados en la página de inicio
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
                    <button class="btn-agregar" data-id="${producto.id}">Agregar al Carrito</button>
                </div>
            `;
            grid.appendChild(productoElement);
        });

        // Agregar event listeners a los botones
        const botonesAgregar = document.querySelectorAll('.btn-agregar');
        botonesAgregar.forEach(boton => {
            boton.addEventListener('click', function () {
                const id = parseInt(this.getAttribute('data-id'));
                carrito.agregarAlCarrito(id);
            });
        });
    }
}