const Category = require('../models/Category.model.js');
const mongoose = require('mongoose');

module.exports.categoriesController = {


    getCategories: async (req, res) => {
        try {
          res.json(await Category.find({}));
        } catch (error) {
          res.json("error");
        }
      },



    addCategory: async (req, res) => {
      try {
        const add = await Category.create ({
          name: req.body.name,
          brand: req.body.brand,
          reviews: req.body.reviews,
        }
        )
          res.json('Добавлена категория');
        } catch (error) {
          res.json("error")
        }
      },




      patchCategory: async (req, res) => {
        try {
          const patch = await Category.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            brand: req.body.brand,
            reviews: req.body.reviews,
          }
        )
         res.json('Категория изменена')
        } catch (error) {
          res.json("error");
        }
      },





  deleteCategory: async (req, res) => {
    try {
      const dele = await Category.findByIdAndRemove(req.params.id)
      res.json("Категория удалена")
    } catch (error) {
      res.json("error");
    }
  },
    


}