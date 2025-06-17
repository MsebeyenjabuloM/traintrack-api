const express = require('express');
const router = express.Router();

const {
  getAllPrograms,
  getProgramById,
  createProgram,
  updateProgram,
  deleteProgram
} = require('../controllers/programController');

router.get('/', getAllPrograms);
router.get('/:id', getProgramById);
router.post('/', createProgram);
router.put('/:id', updateProgram);
router.delete('/:id', deleteProgram);




/**
 * @swagger
 * /programs:
 *   get:
 *     summary: Get all programs
 *     responses:
 *       200:
 *         description: A list of programs
 */
router.get('/', getAllPrograms);

/**
 * @swagger
 * /programs/{id}:
 *   get:
 *     summary: Get a program by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Program found
 *       404:
 *         description: Program not found
 */


/**
 * @swagger
 * /programs:
 *   post:
 *     summary: Create a new program
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               durationWeeks:
 *                 type: integer
 *               intensityLevel:
 *                 type: string
 *     responses:
 *       201:
 *         description: Program created successfully
 */

/**
 * @swagger
 * /programs/{id}:
 *   put:
 *     summary: Update a program
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
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               durationWeeks:
 *                 type: integer
 *               intensityLevel:
 *                 type: string
 *     responses:
 *       200:
 *         description: Program updated successfully
 */


/**
 * @swagger
 * /programs/{id}:
 *   delete:
 *     summary: Delete a program
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Program deleted successfully
 */



module.exports = router;