const express = require('express');
const router = express.Router();
const Type = require('../models').Type;

// Listar todos los tipos
router.get('/', async (req, res) => {
    const types = await Type.findAll();
    res.json(types);
});

// Crear un nuevo tipo
router.post('/', async (req, res) => {
    const { type } = req.body;
    const newType = await Type.create({ type });
    res.json(newType);
});

// Obtener un tipo por su ID
router.get('/:id', async (req, res) => {
    const type = await Type.findByPk(req.params.id);
    res.json(type);
});

// Actualizar un tipo por su ID
router.put('/:id', async (req, res) => {
    const { type } = req.body;
    await Type.update({ type }, { where: { id: req.params.id } });
    res.json({ message: 'Tipo actualizado con éxito' });
});

// Eliminar un tipo por su ID
router.delete('/:id', async (req, res) => {
    await Type.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Tipo eliminado con éxito' });
});

module.exports = router;
