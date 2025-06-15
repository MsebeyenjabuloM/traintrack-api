const express = require('express');
const router = express.Router();
const {
  getAllTrainers,
  getTrainerById,
  createTrainer,
  updateTrainer,
  deleteTrainer,
} = require('../controllers/trainerController');

const {
  createTrainerValidator,
  updateTrainerValidator
} = require('../validators/trainerValidation');

router.post('/', createTrainerValidator, createTrainer);
router.put('/:id', updateTrainerValidator, updateTrainer);


router.get('/', controller.getAllTrainers);
router.get('/:id', controller.getTrainerById);
router.post('/', controller.createTrainer);
router.put('/:id', controller.updateTrainer);
router.delete('/:id', controller.deleteTrainer);


/**
 * @swagger
 * /trainers:
 *   post:
 *     summary: Create a new trainer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               specialty:
 *                 type: string
 *     responses:
 *       201:
 *         description: Trainer created successfully
 *       400:
 *         description: Validation error
 */

// router.post('/', createTrainer);

/**
 * @swagger
 * /trainers/{id}:
 *   put:
 *     summary: Update a trainer by ID
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
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               specialty:
 *                 type: string
 *     responses:
 *       200:
 *         description: Trainer updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Trainer not found
 */

//router.put('/:id', updateTrainer);

/**
 * @swagger
 * /trainers/{id}:
 *   delete:
 *     summary: Delete a trainer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Trainer deleted
 *       404:
 *         description: Trainer not found
 */

//router.delete('/:id', deleteTrainer);

module.exports = router;
