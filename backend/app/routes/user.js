    const express = require('express');
    const router = express.Router();
    const userControllers = require('../controllers/user.js');
    const auth = require('../middleware/auth');

    // ROUTE POUR LES UTILISATEURS
    
    router.post('/signup', userControllers.signup);
    router.post('/login', userControllers.login);
    router.delete('/:userId',auth, userControllers.delete);

    module.exports = router;
