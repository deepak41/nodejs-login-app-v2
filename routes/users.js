const express = require ('express');
const router = express.Router();
const { getAllUsers, createUser } = require('../controllers/users');

router.get('/', getAllUsers);
router.post('/register', createUser);

module.exports = {
    usersRouter: router
}
