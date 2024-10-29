const express = require('express');
const {
    register,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require('../controllers/User');
const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', register);

// Ruta para obtener todos los usuarios
router.get('/users', getAllUsers);

// Ruta para obtener un usuario por ID
router.get('/users/:id', getUserById);

// Ruta para actualizar un usuario por ID
router.put('/users/:id', updateUser);

// Ruta para eliminar un usuario por ID
router.delete('/users/:id', deleteUser);

module.exports = router;
