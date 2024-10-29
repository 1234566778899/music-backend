const User = require("../db/Schemas/User");

// Registrar un nuevo usuario
const register = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        return res.status(201).json({ ok: 'Usuario registrado exitosamente', user: newUser });
    } catch (error) {
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Actualizar un usuario por ID
const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        return res.status(200).json({ ok: 'Usuario actualizado exitosamente', user: updatedUser });
    } catch (error) {
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Eliminar un usuario por ID
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        return res.status(200).json({ ok: 'Usuario eliminado exitosamente' });
    } catch (error) {
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = {
    register,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
