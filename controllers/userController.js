const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.render('user/users', { users });
    } catch (err) {
        res.status(500).send('Error users');
    }
}

