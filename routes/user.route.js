const { Router } = require("express");
const { userController } = require("../controllers/users.controller");
const router = Router();

router.post("/", userController.postUser) // создание польвателя
router.get("/admin", userController.getUser) // просмотр всех пользователей админом
router.get("/:id/admin", userController.getUserId) // просмотр пользователя по ид
router.delete("/:id/admin", userController.deleteUser) // удаление пользователя админом
router.patch("/:id/admin", userController.upWallet) // пополнение кошелька
router.patch("/:id/product/:idProduct", userController.addProductInBasket) // добавление продукта в корзину
router.patch("/:id", userController.deleteProductFromBasket) // удаление продукта из коризины
router.patch("/:id/basket/clear", userController.clearBasket) // удаление всех продуктов из корзины
router.patch("/:id/basket/buy", userController.buyBasket) // покупка всех продуктов из корзины
module.exports = router;
