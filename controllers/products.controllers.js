const Product = require('../models/Product.model.js');
const mongoose = require('mongoose');

module.exports.productsController = {


    getProducts: async (req, res) => {
        try {
          res.json(await Product.find({}));
        } catch (error) {
          res.json("error");
        }
      },



      getProductsByCategory: async (req, res) => {
        try {
          res.json(await Product.find({category: req.params.id}));
        } catch (error) {
          res.json("error");
        }
      },



    addProduct: async (req, res) => {
      try {
        const add = await Product.create ({
            name: req.body.name,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
        }
        )
          res.json('Товар добавлен');
        } catch (error) {
          res.json("error")
        }
      },




      patchProduct: async (req, res) => {
        try {
          const patch = await Product.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
          }
        )
         res.json('Продукт изменен')
        } catch (error) {
          res.json("error");
        }
      },





  deleteProduct: async (req, res) => {
    try {
      const dele = await Product.findByIdAndRemove(req.params.id)
      res.json("Продукт удален")
    } catch (error) {
      res.json("error");
    }
  },
    


}