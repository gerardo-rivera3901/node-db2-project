const express = require('express');
const Car = require('./car-model');
const Middleware = require('../middleware/middleware');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data  = await Car.getAll();
    res.status(200).json(data);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data  = await Car.getById(id);
    res.status(200).json(data);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', Middleware.validatePost, async (req, res) => {
  try {
    const post = req.body;
    const data = await Car.create(post);
    const newCar = await Car.getById(data[0]);
    res.status(201).json(newCar);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    await Car.update(id, changes);
    const updated = await Car.getById(id);
    res.status(200).json(updated);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Car.delete(id);
    res.status(200).json({ message: `Post with the id of ${id} was deleted` });
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;