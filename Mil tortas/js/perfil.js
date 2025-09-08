document.addEventListener('DOMContentLoaded', function () {
    const usuario = storage.obtenerUsuario();

    if (!usuario) {
        window.location.href = 'registro.html';
        return;
    }

    document.getElementById('nombre').value = usuario.nombre;
    document.getElementById('email').value = usuario.email;
    document.getElementById('fecha-nacimiento').value = usuario.fechaNacimiento;

    const formulario = document.getElementById('formulario-actualizacion');
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombreActualizado = document.getElementById('nombre').value;
        const emailActualizado = document.getElementById('email').value;
        const fechaActualizada = document.getElementById('fecha-nacimiento').value;

        const usuarioActualizado = {
            ...usuario, 
            nombre: nombreActualizado,
            email: emailActualizado,
            fechaNacimiento: fechaActualizada
        };

        storage.guardarUsuario(usuarioActualizado);

        alert('¡Perfil actualizado con éxito!');
    });

    const btnCerrarSesion = document.getElementById('btn-cerrar-sesion');
    btnCerrarSesion.addEventListener('click', function () {
        storage.limpiarUsuario();
        alert('Has cerrado sesión.');
        window.location.href = 'index.html';
    });
});