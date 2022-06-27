const User = require("../models/User.model");

module.exports.userController = {
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json(`пользователь с ид:${req.params.id} удален!`);
    } catch (e) {
      res.json(e);
    }
  },
  getUserId: async (req, res) => {
    try {
      res.json(await User.findById(req.body.id));
    } catch (e) {
      res.json(e);
    }
  },
  getUser: async (req, res) => {
    try {
      res.json(await User.find({}));
    } catch (e) {
      res.json(e);
    }
  },

  upWallet: async (req, res) => {
    const user = await User.findById(req.params.id);
    try {
      await User.findByIdAndUpdate(req.params.id, {
        wallet: user.wallet + req.body.wallet,
      });
      res.json(`кошелек пополнен на сумму ${req.body.wallet}`);
    } catch (e) {
      res.json(e);
    }
  },

  addProductInBasket: async (req, res) => {
    const product = await Product.findById(req.params.idProduct);
    const user = await User.findById(req.params.id);
    const basket = await Basket.findById(user.basket);
    try {
      await Basket.findByIdAndUpdate(user.basket, {
        $push: { basket: req.params.idProduct },
        sum: basket.sum + product.price,
      });
      res.json("Лекарстов добавлено в корзину");
    } catch (e) {
      res.json(e);
    }
  },

  deleteProductFromBasket: async (req, res) => {
    const drug = await Product.findById(req.body.idProduct);
    const user = await User.findById(req.params.id);
    try {
      await Basket.findByIdAndUpdate(user.basket, {
        $pull: { basket: req.body.idProduct },
        sum: basket.sum - product.price,
      });
      res.json("Лекарство из корзины удалено");
    } catch (e) {
      res.json(e);
    }
  },

  clearBasket: async (req, res) => {
    const user = await User.findById(req.params.id);
    try {
      await Basket.findByIdAndUpdate(user.basket, {
        basket: [],
        sum: 0,
      });
      res.json("Корзина очищена");
    } catch (e) {
      res.json(e);
    }
  },

  buyBasket: async (req, res) => {
    const user = await User.findById(req.params.id);
    try {
      if (user.wallet >= user.sum) {
        await Basket.findByIdAndUpdate(req.params.id, {
          basket: [],
          wallet: user.wallet - basket.sum,
          sum: 0,
        });
        res.json("Лекарство из корзины куплены");
      } else {
        res.json("на счету недостаточно средств");
      }
    } catch (e) {
      res.json(e);
    }
  },

  postUser: async (req, res) => {
    const { name, wallet, basket } = req.body;
    try {
      await User.create({
        name,
        wallet,
        basket,
      });
      res.json("Пользователь создан");
    } catch (e) {
      res.json(e);
    }
  },
};
