const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/courseController');

router.post('/courses/:action', courseController.action);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id/hardDelete', courseController.hardDelete);
router.get('/trash', courseController.trash);
router.delete('/:id/delete',courseController.delete);
router.put('/:id/update',courseController.update)
router.get('/:id/edit', courseController.edit); 
router.get('/view',courseController.view);
router.get('/create', courseController.create);
router.post('/save', courseController.save);
router.get('/:slug', courseController.detail);

module.exports = router