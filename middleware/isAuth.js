function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.status(401).json({ message: 'Not authorized' });
}
module.exports = isAuth;
