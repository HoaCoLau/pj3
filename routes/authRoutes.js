const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
  });
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', authController.login);

module.exports = router;