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
                imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQruPGpmGm6_S4sMSDalYfvmZT5gGwlfmicug&sgit '
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
                imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvi3_VP-zWyB1BlW46XHAXFR2OQerKahW_Q&s'
            },
            {
                id: 'PI001',
                nombre: 'Mousse de Chocolate',
                descripcion: 'Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate.',
                precio: 5000,
                categoria: 'Postres Individuales',
                tipo: 'circular',
                tamano: 'pequeno',
                imagen: 'https://www.bonella.com.ec/-/media/Project/Upfield/Brands/Rama/Rama-EC/Assets/Recipes/sync-img/d65034c7-c31d-4d41-8ffd-80fcffa0f254.jpg?rev=2d3b42b7082e4be48a0448d611c08566'
            },
            {
                id: 'PI002',
                nombre: 'Tiramisú Clásico',
                descripcion: 'Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.',
                precio: 5500,
                categoria: 'Postres Individuales',
                tipo: 'cuadrada',
                tamano: 'pequeno',
                imagen: 'https://www.bettycrocker.lat/wp-content/uploads/2021/04/BCL-Tiramisu_Recipe_770x514.jpg'
            },
            {
                id: 'PSA001',
                nombre: 'Torta Sin Azúcar de Naranja',
                descripcion: 'Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables.',
                precio: 48000,
                categoria: 'Productos Sin Azúcar',
                tipo: 'circular',
                tamano: 'mediano',
                imagen: 'https://content-cocina.lecturas.com/medio/2024/02/12/pastel_de_naranja_sin_harina_00000000_240212030100_1200x1200.jpg'
            },
            {
                id: 'PSA002',
                nombre: 'Cheesecake Sin Azúcar',
                descripcion: 'Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.',
                precio: 47000,
                categoria: 'Productos Sin Azúcar',
                tipo: 'circular',
                tamano: 'pequeno',
                imagen: 'https://www.paulinacocina.net/wp-content/uploads/2025/01/receta-de-cheesecake-1742898428.jpg'
            },
            {
                id: 'PT001',
                nombre: 'Empanada de Manzana',
                descripcion: 'Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.',
                precio: 3000,
                categoria: 'Pastelería Tradicional',
                tipo: 'cuadrada',
                tamano: 'pequeno',
                imagen: 'https://i.ytimg.com/vi/wToDEKvL-NM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD3v4UgMlXYsOcaG_3lWnC9kB0qGw'
            },
            {
                id: 'PT002',
                nombre: 'Tarta de Santiago',
                descripcion: 'Tradicional tarta española hecha con almendras, azúcar, y huevos, una delicia para los amantes de los postres clásicos.',
                precio: 6000,
                categoria: 'Pastelería Tradicional',
                tipo: 'circular',
                tamano: 'pequeno',
                imagen: 'https://recipesblob.oetker.es/assets/c104e75b79384f3b94873bd15cdfe66c/1272x764/tarta-de-santiago.webp'
            },
            {
                id: 'PG001',
                nombre: 'Brownie Sin Gluten',
                descripcion: 'Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor.',
                precio: 4000,
                categoria: 'Productos sin gluten',
                tipo: 'cuadrada',
                tamano: 'pequeno',
                imagen: 'https://content.cuerpomente.com/medio/2023/05/04/brownie-recetas-saludables_6e41a648_230504111738_1280x720.jpg'
            },
            {
                id: 'PG002',
                nombre: 'Pan Sin Gluten',
                descripcion: 'Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.',
                precio: 3500,
                categoria: 'Productos sin gluten',
                tipo: 'cuadrada',
                tamano: 'pequeno',
                imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJs2H6vRQ9wu4Kq0qlrkK1C15BWFQpI4ymsA&s'
            },
            {
                id: 'PV001',
                nombre: 'Torta Vegana de Chocolate',
                descripcion: 'Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos.',
                precio: 50000,
                categoria: 'Productos Vegana',
                tipo: 'circular',
                tamano: 'grande',
                imagen: 'https://happyvegannie.com/wp-content/uploads/2022/01/blog-img-6234-web.jpg'
            },
            {
                id: 'PV002',
                nombre: 'Galletas Veganas de Avena',
                descripcion: 'Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano.',
                precio: 4500,
                categoria: 'Productos Vegana',
                tipo: 'cuadrada',
                tamano: 'pequeno',
                imagen: 'https://delantaldealces.com/wp-content/uploads/2016/01/galletas-avena-veganas-3.jpg    '
            },
            {
                id: 'TE001',
                nombre: 'Torta Especial de Cumpleaños',
                descripcion: 'Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.',
                precio: 55000,
                categoria: 'Tortas Especiales',
                tipo: 'circular',
                tamano: 'grande',
                imagen: 'https://www.ferrerorocher.com/ar/sites/ferrerorocher20_ar/files/2021-05/birthday-cake_0.jpeg?t=1750438253'
            },
            {
                id: 'TE002',
                nombre: 'Torta Especial de Boda',
                descripcion: 'Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.',
                precio: 60000,
                categoria: 'Tortas Especiales',
                tipo: 'cuadrada',
                tamano: 'grande',
                imagen: 'https://i.pinimg.com/736x/e1/0f/91/e10f9182247c8f5ccb47ab32acc62d92.jpg'
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