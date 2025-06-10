const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', {
  failureRedirect: '/',
  successRedirect: '/auth/protected'
}));

router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

router.get('/protected', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  res.json({ message: 'You are logged in', user: req.user });
});

module.exports = router;
