const { body } = require('express-validator');

exports.createSessionValidator = [
  body('clientId').notEmpty().withMessage('Client ID is required'),
  body('trainerId').notEmpty().withMessage('Trainer ID is required'),
  body('sessionDate')
    .isISO8601()
    .withMessage('Valid session date is required'),
  body('duration')
    .isNumeric()
    .withMessage('Duration must be a number (in minutes)'),
  body('notes').optional().isString().withMessage('Notes must be a string'),
];

exports.updateSessionValidator = [
  body('sessionDate').optional().isISO8601().withMessage('Valid session date is required'),
  body('duration').optional().isNumeric().withMessage('Duration must be a number'),
  body('notes').optional().isString().withMessage('Notes must be a string'),
];
