const express = require('express');
const router = express.Router();
const {
  getAllSessions,
  getSessionById,
  createSession,
  updateSession,
  deleteSession,
} = require('../controllers/sessionController');

const {
  createSessionValidator,
  updateSessionValidator
} = require('../validators/sessionValidation');

router.post('/', createSessionValidator, createSession);
router.put('/:id', updateSessionValidator, updateSession);


router.get('/', controller.getAllSessions);
router.get('/:id', controller.getSessionById);
router.post('/', controller.createSession);
router.put('/:id', controller.updateSession);
router.delete('/:id', controller.deleteSession);


/**
 * @swagger
 * /sessions:
 *   get:
 *     summary: Get all sessions
 *     responses:
 *       200:
 *         description: A list of sessions
 */


/**
 * @swagger
 * /sessions/{id}:
 *   get:
 *     summary: Get a session by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Session found
 *       404:
 *         description: Session not found
 */


/**
 * @swagger
 * /sessions:
 *   post:
 *     summary: Create a new session
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - client
 *               - trainer
 *               - date
 *             properties:
 *               client:
 *                 type: string
 *                 example: 665f30f82c450216a94f4b01
 *               trainer:
 *                 type: string
 *                 example: 665f31b02c450216a94f4b03
 *               date:
 *                 type: string
 *                 format: date-time
 *                 example: 2025-06-15T10:00:00Z
 *               focus:
 *                 type: string
 *                 example: Upper body strength
 *     responses:
 *       201:
 *         description: Session created successfully
 *       400:
 *         description: Validation error
 */


/**
 * @swagger
 * /sessions/{id}:
 *   put:
 *     summary: Update a session by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               client:
 *                 type: string
 *               trainer:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date-time
 *               focus:
 *                 type: string
 *     responses:
 *       200:
 *         description: Session updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Session not found
 */


/**
 * @swagger
 * /sessions/{id}:
 *   delete:
 *     summary: Delete a session by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Session deleted
 *       404:
 *         description: Session not found
 */

module.exports = router;