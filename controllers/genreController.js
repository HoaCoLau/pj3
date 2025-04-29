const Genre = require('../models/Genre');

exports.getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.render('gener/genres', { genres });
  } catch (err) {
    res.status(500).send('Error retrieving genres');
  }
};


exports.getGenreById = async (req, res) => {
  try {
    const genre = await Genre.findByPk(req.params.id);
    if (genre) {
      res.json(genre);
    } else {
      res.status(404).send('Genre not found');
    }
  } catch (err) {
    res.status(500).send('Error retrieving genre');
  }
};
exports.renderCreateGenreForm = (req, res) => {
    res.render('gener/createGenre');
  };
exports.createGenre = async (req, res) => {
  try {
    const { name } = req.body;
    const newGenre = await Genre.create({ name });
    res.redirect('/genres');
  } catch (err) {
    res.status(500).send('Error creating genre');
  }
};

exports.renderUpdateGenreForm = async (req, res) => {
    try {
      const genre = await Genre.findByPk(req.params.id);
      if (genre) {
        res.render('gener/updateGenre', { genre });
      } else {
        res.status(404).send('Genre not found');
      }
    } catch (err) {
      res.status(500).send('Error loading genre');
    }
  };
exports.updateGenre = async (req, res) => {
  try {
    const { name } = req.body;
    const genre = await Genre.findByPk(req.params.id);
    if (genre) {
      await genre.update({ name });
      res.redirect('/genres');
    } else {
      res.status(404).send('Genre not found');
    }
  } catch (err) {
    res.status(500).send('Error updating genre');
  }
};


exports.deleteGenre = async (req, res) => {
  try {
    const genre = await Genre.findByPk(req.params.id);
    if (genre) {
      await genre.destroy();
      res.redirect('/genres');
    } else {
      res.status(404).send('Genre not found');
    }
  } catch (err) {
    res.status(500).send('Error deleting genre');
  }
};