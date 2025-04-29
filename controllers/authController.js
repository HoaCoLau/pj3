
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { createUserSchema } = require('../validation/userValidation');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email, password } });
  if (user) {
    const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, process.env.JWT_SECRET, { expiresIn: '5h' });
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/');
  } else {
    res.send('Sai tài khoản hoặc mật khẩu');
  }
};

exports.CreateSignupForm = async (req, res) => {
  res.render('auth/signup', {  errorObj: {} });
};


exports.signup = async (req, res) => {
  const { error } = createUserSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errorObj = {};
    if (error.details && error.details.length) {
      error.details.forEach(err => {
        errorObj[err.path[0]] = err.message;
      });
    }
    return res.render('/signup', {
      errorObj,
      oldInput: req.body,
    });
  }
  try {
    const { email, name, password } = req.body;
    await User.create({ email, name, password });
    res.redirect('/login');
  } catch (err) {
    res.status(500).send('Error creating account');
  }
};
exports.logout = (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  });
  res.redirect('/login');
};