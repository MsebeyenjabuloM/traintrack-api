const express = require('express');
const passport = require('passport');
const router = express.Router();

// Middleware to protect routes
function isLoggedIn(req, res, next) {
  if (req.user) return next();
  res.status(401).json({ message: 'Unauthorized' });
}

// 1. Start OAuth flow
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// 2. Google callback route
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/failure' }),
  (req, res) => {
    // Successful login
    res.redirect('/auth/protected');
  }
);

// 3. Protected route
router.get('/protected', isLoggedIn, (req, res) => {
  res.send(`Welcome ${req.user.displayName}, you're logged in.`);
});

// 4. Logout
router.get('/logout', (req, res, next) => {
  req.logout(err => {
    if (err) {
      return next(err);
    }

    // Destroy session 
    req.session.destroy(err => {
      if (err) {
        return next(err);
      }

      // Send response 
      res.redirect('/'); 
    });
  });
});


// 5. Failure
router.get('/failure', (req, res) => {
  res.send('Failed to authenticate...');
});

module.exports = router;
