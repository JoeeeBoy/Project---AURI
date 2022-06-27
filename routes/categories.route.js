const { Router } = require('express');
const router = Router();
const { categoriesController } = require('../controllers/categories.controllers.js');

router.post('/admin/categories', categoriesController.addCategory); //Добавляет категории
router.patch('/admin/categories/:id', categoriesController.patchCategory); //Изменяет категории
router.get('/admin/categories', categoriesController.getCategories); //Просмотр категорий админами
router.get('/user/categories', categoriesController.getCategories); //Просмотр категорий юзерами
router.delete('/admin/categories/:id', categoriesController.deleteCategory); //Удаление категории

module.exports = router;