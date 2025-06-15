const { body } = require('express-validator');

exports.createTrainerValidator = [
  body('name').notEmpty().withMessage('Trainer name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('specialty').optional().isString().withMessage('Specialty must be a string'),
];

exports.updateTrainerValidator = [
  body('name').optional().notEmpty().withMessage('Trainer name cannot be empty'),
  body('email').optional().isEmail().withMessage('Must be a valid email'),
  body('specialty').optional().isString().withMessage('Specialty must be a string'),
];
