const { Router } = require('express');
const router = Router();
const { productsController } = require('../controllers/products.controllers.js');

router.post('/admin/products', productsController.addProduct); //Добавление продукта
router.patch('/admin/products/:id', productsController.patchProduct); //Изменение продукта
router.get('/admin/products', productsController.getProducts); //Просмотр продукта админами
router.get('/user/products', productsController.getProducts); //Просмотр продукта юзерами
router.get('/user/products/:id', productsController.getProductsByCategory); //Просмотр продукта по категориям
router.delete('/admin/products/:id', productsController.deleteProduct); //Удаление продукта

module.exports = router;