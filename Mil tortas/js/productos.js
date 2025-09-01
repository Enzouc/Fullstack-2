// productos.js - Gestión de productos
const productosData = {
    // Obtener todos los productos
    obtenerTodos: function () {
        return [
            // Tortas Cuadradas
            {
                id: 1,
                codigo: "TC001",
                nombre: "Torta Cuadrada de Chocolate",
                descripcion: "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.",
                precio: 45000,
                tipo: "cuadrada",
                tamaño: "mediano",
                imagen: "https://placehold.co/300x200/f8bbd0/333?text=Torta+Chocolate+Cuadrada",
                categoria: "TC"
            },
            {
                id: 2,
                codigo: "TC002",
                nombre: "Torta Cuadrada de Frutas",
                descripcion: "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.",
                precio: 50000,
                tipo: "cuadrada",
                tamaño: "grande",
                imagen: "https://placehold.co/300x200/f8bbd0/333?text=Torta+Frutas+Cuadrada",
                categoria: "TC"
            },
            // Tortas Circulares
            {
                id: 3,
                codigo: "TT001",
                nombre: "Torta Circular de Vainilla",
                descripcion: "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.",
                precio: 40000,
                tipo: "circular",
                tamaño: "mediano",
                imagen: "https://placehold.co/300x200/f8bbd0/333?text=Torta+Vainilla+Circular",
                categoria: "TT"
            },
            {
                id: 4,
                codigo: "TT002",
                nombre: "Torta Circular de Manjar",
                descripcion: "Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.",
                precio: 42000,
                tipo: "circular",
                tamaño: "mediano",
                imagen: "https://placehold.co/300x200/f8bbd0/333?text=Torta+Manjar+Circular",
                categoria: "TT"
            },
            // ... (otros productos)
        ];
    },

    // Obtener productos destacados
    obtenerProductosDestacados: function () {
        const todos = this.obtenerTodos();
        return [todos[0], todos[2], todos[4]]; // Productos seleccionados como destacados
    },

    // Obtener producto por ID
    obtenerPorId: function (id) {
        return this.obtenerTodos().find(producto => producto.id === id);
    },

    // Obtener productos por categoría
    obtenerPorCategoria: function (categoria) {
        if (categoria === 'todos') return this.obtenerTodos();
        return this.obtenerTodos().filter(producto => producto.categoria === categoria);
    },

    // Obtener nombre de categoría por código
    obtenerNombreCategoria: function (codigo) {
        const categorias = {
            'TC': 'Tortas Cuadradas',
            'TT': 'Tortas Circulares',
            'PI': 'Postres Individuales',
            'PSA': 'Sin Azúcar',
            'PT': 'Tradicional',
            'PG': 'Sin Gluten',
            'PV': 'Vegana',
            'TE': 'Tortas Especiales'
        };
        return categorias[codigo] || 'Sin categoría';
    }
};