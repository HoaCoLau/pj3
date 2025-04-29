const e = require('express');
const Book = require('../models/Book');
const Genre = require('../models/Genre');
const { createBookSchema, updateBookSchema } = require('../validation/bookValidation');


exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    const genres = await Genre.findAll();
    res.render('book/books', { books, genres });
  } catch (err) {
    console.error('Error:', err);
  }
};
exports.CreateBookForm = async (req, res) => {
  const genres = await Genre.findAll();
  res.render('book/createBook', { genres, oldInput: {}, errorObj: {} });
};

exports.createBook = async (req, res) => {
  const { error } = createBookSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const genres = await Genre.findAll();
    const errorObj = {};
    if (error.details && error.details.length) {
      error.details.forEach(err => {
        errorObj[err.path[0]] = err.message;
      });
    }
    return res.render('book/createBook', {
      genres,
      errorObj,
      oldInput: req.body,
    });
  }
  try {
    const { title, author, price, genre_id } = req.body;
    await Book.create({ title, author, price, genre_id });
    res.redirect('/books');
  } catch (err) {
    res.status(500).send('Error creating book');
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      res.render('book/bookDetail', { book });
    } else {
      res.status(404).send('Book not found');
    }
  } catch (err) {
    res.status(500).send('Error book details');
  }
}
exports.UpdateBookForm = async (req, res) => {
  try {

    const book = await Book.findByPk(req.params.id);
    const genres = await Genre.findAll();
    const oldInput = book.dataValues;
    if (book) {
      res.render('book/updateBook', { errorObj: {}, oldInput, genres });
    } else {
      res.status(404).send('Book not found');
    }
  } catch (err) {
    res.status(500).send('Error loading book');
  }
};

exports.updateBook = async (req, res) => {
  const { error } = updateBookSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const genres = await Genre.findAll();
    const errorObj = {};
    if (error.details && error.details.length) {
      error.details.forEach(err => {
        errorObj[err.path[0]] = err.message;
      });
    }
    return res.render('book/updateBook', {
      genres,
      errorObj,
      oldInput: req.body,
    });
  }
  try {
    const { title, author, price, genre_id } = req.body;
    const book = await Book.findByPk(req.params.id);
    if (book) {
      await book.update({ title, author, price, genre_id });
      res.redirect('/books');
    } else {
      res.status(404).send('Book not found');
    }
  } catch (err) {
    console.error('Error updating book:', err);
  }
};
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      await book.destroy();
      res.redirect('/books');
    } else {
      res.status(404).send('Book not found');
    }
  } catch (err) {
    res.status(500).send('Error deleting book');
  }
}