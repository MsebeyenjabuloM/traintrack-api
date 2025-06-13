const express = require('express');
const router = express.Router();
const controller = require('../controllers/trainerController');

router.get('/', controller.getAllTrainers);
router.get('/:id', controller.getTrainerById);
router.post('/', controller.createTrainer);
router.put('/:id', controller.updateTrainer);
router.delete('/:id', controller.deleteTrainer);


/**
 * @swagger
 * /trainers:
 *   get:
 *     summary: Get all trainers
 *     responses:
 *       200:
 *         description: A list of trainers
 *   post:
 *     summary: Create a new trainer
 *     responses:
 *       201:
 *         description: Trainer created successfully
 *
 * /trainers/{id}:
 *   get:
 *     summary: Get a trainer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Trainer found
 *   put:
 *     summary: Update a trainer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Trainer updated
 *   delete:
 *     summary: Delete a trainer
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Trainer deleted
 */


module.exports = router;
