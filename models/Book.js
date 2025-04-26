const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Genre = require('./Genre');

const Book = sequelize.define('Book', {
  title: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
}, {
  tableName: 'books',
  timestamps: false,
});

Book.belongsTo(Genre, { foreignKey: 'genre_id', as: 'genre' });

module.exports = Book;