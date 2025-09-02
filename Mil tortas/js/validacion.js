const validacion = {
    validarFormularioRegistro: function (e) {
        e.preventDefault();

        let esValido = true;

        const nombre = document.getElementById('nombre');
        if (!nombre.value.trim()) {
            this.mostrarError('nombre', 'El nombre es obligatorio');
            esValido = false;
        } else {
            this.limpiarError('nombre');
        }

        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            this.mostrarError('email', 'El email es obligatorio');
            esValido = false;
        } else if (!emailRegex.test(email.value)) {
            this.mostrarError('email', 'El formato del email no es válido');
            esValido = false;
        } else {
            this.limpiarError('email');
        }

        const fechaNacimiento = document.getElementById('fecha-nacimiento');
        if (!fechaNacimiento.value) {
            this.mostrarError('fecha', 'La fecha de nacimiento es obligatoria');
            esValido = false;
        } else {
            const fecha = new Date(fechaNacimiento.value);
            const hoy = new Date();
            let edad = hoy.getFullYear() - fecha.getFullYear();
            const mes = hoy.getMonth() - fecha.getMonth();

            if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
                edad--;
            }

            if (edad < 18) {
                this.mostrarError('fecha', 'Debes ser mayor de 18 años para registrarte');
                esValido = false;
            } else {
                this.limpiarError('fecha');
            }
        }

        const password = document.getElementById('password');
        if (!password.value) {
            this.mostrarError('password', 'La contraseña es obligatoria');
            esValido = false;
        } else if (password.value.length < 6) {
            this.mostrarError('password', 'La contraseña debe tener al menos 6 caracteres');
            esValido = false;
        } else {
            this.limpiarError('password');
        }

        const codigoPromocional = document.getElementById('codigo-promocional');
        if (codigoPromocional.value && codigoPromocional.value !== 'FELICES50') {
            this.mostrarError('codigo', 'El código promocional no es válido');
            esValido = false;
        } else {
            this.limpiarError('codigo');
        }

        if (esValido) {
            alert('¡Registro exitoso! Ahora puedes disfrutar de nuestros beneficios.');
            e.target.reset();

            this.aplicarDescuentos(email.value, new Date(fechaNacimiento.value), codigoPromocional.value);
        }
    },

    aplicarDescuentos: function (email, fechaNacimiento, codigoPromocional) {
        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - fechaNacimiento.getMonth();

        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }

        if (edad >= 50) {
            alert('¡Felicidades! Obtienes un 50% de descuento en todos nuestros productos por ser mayor de 50 años.');
        }

        if (codigoPromocional === 'FELICES50') {
            alert('¡Felicidades! Obtienes un 10% de descuento de por vida con el código FELICES50.');
        }

        if (email.endsWith('@duocuc.cl')) {
            alert('¡Felicidades! Por ser estudiante de Duoc UC, recibirás una torta gratis en tu cumpleaños.');
        }
    },

    validarCampo: function (e) {
        const campo = e.target;
        const nombre = campo.name;
        const valor = campo.value.trim();

        switch (nombre) {
            case 'nombre':
                if (!valor) {
                    this.mostrarError('nombre', 'El nombre es obligatorio');
                } else {
                    this.limpiarError('nombre');
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!valor) {
                    this.mostrarError('email', 'El email es obligatorio');
                } else if (!emailRegex.test(valor)) {
                    this.mostrarError('email', 'El formato del email no es válido');
                } else {
                    this.limpiarError('email');
                }
                break;
            case 'fecha-nacimiento':
                if (!valor) {
                    this.mostrarError('fecha', 'La fecha de nacimiento es obligatoria');
                } else {
                    this.limpiarError('fecha');
                }
                break;
            case 'password':
                if (!valor) {
                    this.mostrarError('password', 'La contraseña es obligatoria');
                } else if (valor.length < 6) {
                    this.mostrarError('password', 'La contraseña debe tener al menos 6 caracteres');
                } else {
                    this.limpiarError('password');
                }
                break;
            case 'codigo-promocional':
                if (valor && valor !== 'FELICES50') {
                    this.mostrarError('codigo', 'El código promocional no es válido');
                } else {
                    this.limpiarError('codigo');
                }
                break;
        }
    },

    mostrarError: function (campo, mensaje) {
        const errorElement = document.getElementById(`error-${campo}`);
        if (errorElement) {
            errorElement.textContent = mensaje;
        }
    },

    limpiarError: function (campo) {
        const errorElement = document.getElementById(`error-${campo}`);
        if (errorElement) {
            errorElement.textContent = '';
        }
    },

    inicializar: function () {
        const formularioRegistro = document.getElementById('formulario-registro');
        if (formularioRegistro) {
            formularioRegistro.addEventListener('submit', (e) => this.validarFormularioRegistro(e));

            const inputs = formularioRegistro.querySelectorAll('input');
            inputs.forEach(input => {
                input.addEventListener('blur', (e) => this.validarCampo(e));
                input.addEventListener('input', (e) => {
                    const campo = e.target.name;
                    this.limpiarError(campo);
                });
            });
        }
    }
};