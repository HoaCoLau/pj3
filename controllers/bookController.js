const e = require('express');
const Book = require('../models/Book');
const Genre = require('../models/Genre'); 

exports.getAllBooks = async (req, res) => {
    try {
      const books = await Book.findAll(); 
      const genres = await Genre.findAll();
      res.render('books', { books, genres });
    } catch (err) {
      console.error('Error:', err); 
    }
  };
exports.renderCreateBookForm = async (req, res) => {
    const genres = await Genre.findAll();
    res.render('createBook', { genres });
};

exports.createBook = async (req, res) => {
  try {
    const { title, author, price, genre_id } = req.body;
    await Book.create({ title, author, price, genre_id });
    res.redirect('/books');
  } catch (err) {
    res.status(500).send('Error creating book');
  }
};

exports.getBookById = async (req, res) => {
    try{
        const book = await Book.findByPk(req.params.id);
        if (book) {
            res.render('bookDetail', { book });
        } else {
            res.status(404).send('Book not found');
        }
    }catch(err) {
        res.status(500).send('Error book details');
    }
}
exports.renderUpdateBookForm = async (req, res) => {
    try {
      const book = await Book.findByPk(req.params.id);
      const genres = await Genre.findAll();
      if (book) {
        res.render('updateBook', { book, genres });
      } else {
        res.status(404).send('Book not found');
      }
    } catch (err) {
      res.status(500).send('Error loading book');
    }
  };
  
  exports.updateBook = async (req, res) => {
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
    try{
        const book = await Book.findByPk(req.params.id);
        if(book){
            await book.destroy();
            res.redirect('/books');
        }else{
            res.status(404).send('Book not found');
        }
    }catch(err) {
        res.status(500).send('Error deleting book');
    }
}