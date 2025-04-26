const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController'); 
const { authenticateToken } = require('../middleware/authMiddleware');
const { route } = require('./authRoutes');

router.get('/', bookController.getAllBooks);
router.get('/new', bookController.renderCreateBookForm);
router.post('/', bookController.createBook);
router.get('/:id', bookController.getBookById);
router.get('/edit/:id', bookController.renderUpdateBookForm);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;