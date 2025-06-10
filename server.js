require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

const app = express(); // ✅ must be declared before using app.*

require('./auth/auth');

// Trust proxy (useful for Render/Heroku)
app.set('trust proxy', 1);

// Sessions
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // true only in production with HTTPS
    sameSite: 'lax'
  }
}));

app.use(passport.initialize());
app.use(passport.session());

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const clientRoutes = require('./routes/clientRoutes');
const programRoutes = require('./routes/programRoutes');
app.use('/api/clients', clientRoutes);
app.use('/api/programs', programRoutes);

// Swagger
const { swaggerUi, swaggerSpec } = require('./swagger');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Error handler
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.error('MongoDB connection error:', err));
