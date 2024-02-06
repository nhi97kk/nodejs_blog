const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/courseController');

router.get('/view',courseController.view);
router.get('/create', courseController.create);
router.post('/save', courseController.save);
router.get('/:slug', courseController.detail);

module.exports = router