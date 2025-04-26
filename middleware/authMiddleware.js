const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  
  if (!authHeader) {
    return res.render('login');
  }

  const token = authHeader.split(' ')[1]; 
  if (!token) {
    return res.status(401).send('Access Denied: Invalid Token Format');
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; 
    next();
  } catch (err) {
    res.status(403).send('Invalid Token');
  }
};