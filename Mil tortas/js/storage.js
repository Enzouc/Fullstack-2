// storage.js - Manejo del localStorage
const storage = {
    // Obtener carrito desde localStorage
    obtenerCarrito: function () {
        return JSON.parse(localStorage.getItem('carrito')) || [];
    },

    // Guardar carrito en localStorage
    guardarCarrito: function (carrito) {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    },

    // Limpiar carrito
    limpiarCarrito: function () {
        localStorage.removeItem('carrito');
    },

    // Obtener usuario desde localStorage
    obtenerUsuario: function () {
        return JSON.parse(localStorage.getItem('usuario')) || null;
    },

    // Guardar usuario en localStorage
    guardarUsuario: function (usuario) {
        localStorage.setItem('usuario', JSON.stringify(usuario));
    }
};