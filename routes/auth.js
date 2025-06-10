const express = require('express');
const passport = require('passport');
const router = express.Router();


function isLoggedIn(req, res, next) {
  if (req.user) return next();
  res.status(401).json({ message: 'Unauthorized' });
}

// Start OAuth flow
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// OAuth callback
router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/failure',
    successRedirect: '/auth/protected',
  })
);

// Failure route
router.get('/failure', (req, res) => {
  res.send('Failed to authenticate...');
});

// Protected route example
router.get('/protected', isLoggedIn, (req, res) => {
  res.send(`Welcome ${req.user.displayName}, you're logged in.`);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect('/');
  });
});

// Middleware to protect other routes
function isLoggedIn(req, res, next) {
  if (req.user) return next();
  res.status(401).json({ message: 'Unauthorized' });
}

module.exports = router;
