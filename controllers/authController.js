
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username, password } });

  if (user) {
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '5h' });
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/books');
  } else {
    res.send('Sai tài khoản hoặc mật khẩu');
  }
};
