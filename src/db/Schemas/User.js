const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    ID: String,
    contraseña: String,
    clienteNombre: String,
    direccion: String,
    telefono: String,
    foto: String,
    correo: String,
    musicoNombre: String,
    mensaje: String,
    descripcion: String,
    fotoMusico: String,
    genero: String,
    nombreEmpresa: String,
    RUC: String,
    DNI: String,
    plan: String,
    comentario: String
}, {
    timestamps: true
});

module.exports = model('user', UserSchema);
