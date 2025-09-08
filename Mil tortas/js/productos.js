const productosData = {
    obtenerTodos: function () {
        return [
            {
                id: 'TC001',
                nombre: 'Torta Cuadrada de Chocolate',
                descripcion: 'Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.',
                precio: 45000,
                categoria: 'Tortas Cuadradas',
                tipo: 'cuadrada',
                tamano: 'grande',
                imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTw4LCFBgOoVozVginkDI5-M8CXvhNzKYdxkK_8JcXDgTEF64xPtyRED9I6i7WGbFwFxg&usqp=CAU'
            },
            {
                id: 'TC002',
                nombre: 'Torta Cuadrada de Frutas',
                descripcion: 'Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.',
                precio: 50000,
                categoria: 'Tortas Cuadradas',
                tipo: 'cuadrada',
                tamano: 'grande',
                imagen: 'https://placehold.co/300x200/FFF5E1/5D4037?text=Torta+de+Frutas'
            },
            {
                id: 'TT001',
                nombre: 'Torta Circular de Vainilla',
                descripcion: 'Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.',
                precio: 40000,
                categoria: 'Tortas Circulares',
                tipo: 'circular',
                tamano: 'mediano',
                imagen: 'https://tortamaniaecuador.com/wp-content/uploads/2021/12/Tradicional-de-vainilla-300x300.png'
            },
            {
                id: 'TT002',
                nombre: 'Torta Circular de Manjar',
                descripcion: 'Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.',
                precio: 42000,
                categoria: 'Tortas Circulares',
                tipo: 'circular',
                tamano: 'mediano',
                imagen: 'https://placehold.co/300x200/FFF5E1/5D4037?text=Torta+de+Manjar'
            },
            {
                id: 'PI001',
                nombre: 'Mousse de Chocolate',
                descripcion: 'Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate.',
                precio: 5000,
                categoria: 'Postres Individuales',
                tipo: 'circular',
                tamano: 'pequeno',
                imagen: 'https://placehold.co/300x200/FFF5E1/5D4037?text=Mousse+de+Chocolate'
            },
            {
                id: 'PI002',
                nombre: 'Tiramisú Clásico',
                descripcion: 'Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.',
                precio: 5500,
                categoria: 'Postres Individuales',
                tipo: 'cuadrada',
                tamano: 'pequeno',
                imagen: 'https://placehold.co/300x200/FFF5E1/5D4037?text=Tiramisu+Clasico'
            },
            {
                id: 'PSA001',
                nombre: 'Torta Sin Azúcar de Naranja',
                descripcion: 'Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables.',
                precio: 48000,
                categoria: 'Productos Sin Azúcar',
                tipo: 'circular',
                tamano: 'mediano',
                imagen: 'https://placehold.co/300x200/FFF5E1/5D4037?text=Torta+sin+Azucar+de+Naranja'
            },
            {
                id: 'PSA002',
                nombre: 'Cheesecake Sin Azúcar',
                descripcion: 'Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.',
                precio: 47000,
                categoria: 'Productos Sin Azúcar',
                tipo: 'circular',
                tamano: 'pequeno',
                imagen: 'https://placehold.co/300x200/FFF5E1/5D4037?text=Cheesecake+Sin+Azucar'
            },
            {
                id: 'PT001',
                nombre: 'Empanada de Manzana',
                descripcion: 'Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.',
                precio: 3000,
                categoria: 'Pastelería Tradicional',
                tipo: 'cuadrada',
                tamano: 'pequeno',
                imagen: 'https://placehold.co/300x200/FFF5E1/5D4037?text=Empanada+de+Manzana'
            },
            {
                id: 'PT002',
                nombre: 'Tarta de Santiago',
                descripcion: 'Tradicional tarta española hecha con almendras, azúcar, y huevos, una delicia para los amantes de los postres clásicos.',
                precio: 6000,
                categoria: 'Pastelería Tradicional',
                tipo: 'circular',
                tamano: 'pequeno',
                imagen: 'https://placehold.co/300x200/FFF5E1/5D4037?text=Tarta+de+Santiago'
            },
            {
                id: 'PG001',
                nombre: 'Brownie Sin Gluten',
                descripcion: 'Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor.',
                precio: 4000,
                categoria: 'Productos sin gluten',
                tipo: 'cuadrada',
                tamano: 'pequeno',
                imagen: 'https://placehold.co/300x200/FFF5E1/5D4037?text=Brownie+Sin+Gluten'
            },
            {
                id: 'PG002',
                nombre: 'Pan Sin Gluten',
                descripcion: 'Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.',
                precio: 3500,
                categoria: 'Productos sin gluten',
                tipo: 'cuadrada',
                tamano: 'pequeno',
                imagen: 'https://placehold.co/300x200/FFF5E1/5D4037?text=Pan+Sin+Gluten'
            },
            {
                id: 'PV001',
                nombre: 'Torta Vegana de Chocolate',
                descripcion: 'Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos.',
                precio: 50000,
                categoria: 'Productos Vegana',
                tipo: 'circular',
                tamano: 'grande',
                imagen: 'https://placehold.co/300x200/FFF5E1/5D4037?text=Torta+Vegana+de+Chocolate'
            },
            {
                id: 'PV002',
                nombre: 'Galletas Veganas de Avena',
                descripcion: 'Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano.',
                precio: 4500,
                categoria: 'Productos Vegana',
                tipo: 'cuadrada',
                tamano: 'pequeno',
                imagen: 'https://placehold.co/300x200/FFF5E1/5D4037?text=Galletas+Veganas+de+Avena'
            },
            {
                id: 'TE001',
                nombre: 'Torta Especial de Cumpleaños',
                descripcion: 'Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.',
                precio: 55000,
                categoria: 'Tortas Especiales',
                tipo: 'circular',
                tamano: 'grande',
                imagen: 'https://placehold.co/300x200/FFF5E1/5D4037?text=Torta+Especial+de+Cumpleanos'
            },
            {
                id: 'TE002',
                nombre: 'Torta Especial de Boda',
                descripcion: 'Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.',
                precio: 60000,
                categoria: 'Tortas Especiales',
                tipo: 'cuadrada',
                tamano: 'grande',
                imagen: 'https://placehold.co/300x200/FFF5E1/5D4037?text=Torta+Especial+de+Boda'
            },
        ];
    },

    obtenerPorId: function (id) {
        return this.obtenerTodos().find(producto => producto.id === id);
    }
};

const productos = {
    cargarProductos: function (productosMostrar) {
        const grid = document.getElementById('productos-grid');
        if (!grid) return;
        
        grid.innerHTML = '';
        
        if (productosMostrar.length === 0) {
            grid.innerHTML = '<p class="text-center">No se encontraron productos con los filtros seleccionados.</p>';
            return;
        }

        productosMostrar.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.classList.add('producto-card');

            const imagenProducto = producto.imagen || 'https://placehold.co/300x200/FFF5E1/5D4037?text=Mil+Sabores';

            productoElement.innerHTML = `
                <div class="producto-img">
                    <img src="${imagenProducto}" alt="Imagen de ${producto.nombre}">
                </div>
                <div class="producto-info">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <span class="producto-precio">$${producto.precio.toLocaleString('es-CL')}</span>
                    <label for="mensaje-${producto.id}">Mensaje personalizado:</label>
                    <input type="text" id="mensaje-${producto.id}" placeholder="Ej. Feliz Cumpleaños">
                    <button class="agregar-carrito-btn" data-id="${producto.id}">Agregar al Carrito</button>
                </div>
            `;
            grid.appendChild(productoElement);
        });

        const agregarBtns = document.querySelectorAll('.agregar-carrito-btn');
        agregarBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productoId = e.target.dataset.id;
                const mensajeInput = document.getElementById(`mensaje-${productoId}`);
                const mensaje = mensajeInput ? mensajeInput.value.trim() : '';
                carrito.agregarAlCarrito(productoId, mensaje);
            });
        });
    },

    filtrarProductos: function () {
        const categoriaSeleccionada = document.querySelector('.categoria-btn.active').dataset.categoria;
        const tamanoSeleccionado = document.getElementById('filtro-tamano').value;
        let productosFiltrados = productosData.obtenerTodos();
    
        if (categoriaSeleccionada !== 'todos') {
            productosFiltrados = productosFiltrados.filter(producto => producto.categoria === categoriaSeleccionada);
        }
    
        if (tamanoSeleccionado !== 'todos') {
            productosFiltrados = productosFiltrados.filter(producto => producto.tamano === tamanoSeleccionado);
        }

        this.cargarProductos(productosFiltrados);
    },

    inicializarFiltros: function () {
        const categoriaBtns = document.querySelectorAll('.categoria-btn');
        categoriaBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                categoriaBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.filtrarProductos();
            });
        });

        const tamanoSelect = document.getElementById('filtro-tamano');
        tamanoSelect.addEventListener('change', () => {
            this.filtrarProductos();
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('productos-grid')) {
        productos.inicializarFiltros();
        productos.filtrarProductos(); 
    }
});