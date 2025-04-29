const express = require('express');
require('dotenv').config();
const app = express();
const methodOverride = require('method-override');
const authRoutes = require('./routes/authRoutes'); 
const bookRoutes = require('./routes/bookRoutes'); 
const userRoutes = require('./routes/userRoutes');
const genreRoutes = require('./routes/genreRoutes');
const cookieParser = require('cookie-parser');



// Middleware
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));


app.set('view engine', 'ejs');
app.set('views', './views');


// Routes
app.use('/', authRoutes);
app.use('/books', bookRoutes); 
app.use('/users', userRoutes);
app.use('/genres', genreRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Host: http://localhost:${PORT}`);
});
