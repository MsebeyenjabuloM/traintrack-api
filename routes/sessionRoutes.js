const express = require('express');
const router = express.Router();
const controller = require('../controllers/sessionController');

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
 *   post:
 *     summary: Create a new session
 *     responses:
 *       201:
 *         description: Session created successfully
 *
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
 *   put:
 *     summary: Update a session by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Session updated
 *   delete:
 *     summary: Delete a session
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Session deleted
 */


module.exports = router;
