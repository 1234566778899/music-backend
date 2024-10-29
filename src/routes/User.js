const express = require('express');
const {
    register,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require('../controllers/User');
const router = express.Router();

router.post('/', register);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
