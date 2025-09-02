const productosData = {
    obtenerTodos: function () {
        return [
            // Tortas cuadradas 
            {
                id: 1,
                codigo: "TC001",
                nombre: "Torta de Chocolate",
                descripcion: "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.",
                precio: 45000,
                tipo: "cuadrada",
                tamaño: "mediano",
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTw4LCFBgOoVozVginkDI5-M8CXvhNzKYdxkK_8JcXDgTEF64xPtyRED9I6i7WGbFwFxg&usqp=CAU",
                categoria: "TC"
            },
            {
                id: 2,
                codigo: "TC002",
                nombre: "Torta de Frutas",
                descripcion: "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.",
                precio: 50000,
                tipo: "cuadrada",
                tamaño: "grande",
                imagen: "https://cdn0.recetasgratis.net/es/posts/6/3/2/torta_dulce_casera_33236_orig.jpg",
                categoria: "TC"
            },
            // Tortas Circulares
            {
                id: 3,
                codigo: "TT001",
                nombre: "Torta de Vainilla",
                descripcion: "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.",
                precio: 40000,
                tipo: "circular",
                tamaño: "mediano",
                imagen: "https://tortamaniaecuador.com/wp-content/uploads/2021/12/Tradicional-de-vainilla-300x300.png",
                categoria: "TT"
            },
            {
                id: 4,
                codigo: "TT002",
                nombre: "Torta de Manjar",
                descripcion: "Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.",
                precio: 42000,
                tipo: "circular",
                tamaño: "mediano",
                imagen: "https://placehold.co/300x200/f8bbd0/333?text=Torta+Manjar+Circular",
                categoria: "TT"
            },
        ];
    },

    obtenerProductosDestacados: function () {
        const todos = this.obtenerTodos();
        return [todos[0], todos[2], todos[4]];
    },

    obtenerPorId: function (id) {
        return this.obtenerTodos().find(producto => producto.id === id);
    },

    obtenerPorCategoria: function (categoria) {
        if (categoria === 'todos') return this.obtenerTodos();
        return this.obtenerTodos().filter(producto => producto.categoria === categoria);
    },

    obtenerNombreCategoria: function (codigo) {
        const categorias = {
            'TC': 'Torta Cuadrada',
            'TT': 'Torta Circular',
            'PI': 'Pie',
            'PSA': 'Postre sin azúcar',
            'PT': 'Pastel',
            'PG': 'Pastel de Gala',
            'PV': 'Pastel Vegano',
            'TE': 'Torta Especial'
        };
        return categorias[codigo] || 'Sin categoría';
    }
};