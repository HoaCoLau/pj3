const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');
const { route } = require('./authRoutes');


router.get('/', genreController.getAllGenres);
router.get('/new', genreController.renderCreateGenreForm);
router.post('/', genreController.createGenre);
router.get('/:id', genreController.getGenreById);
router.get('/edit/:id', genreController.renderUpdateGenreForm);
router.put('/:id', genreController.updateGenre);
router.delete('/:id', genreController.deleteGenre);



module.exports = router;