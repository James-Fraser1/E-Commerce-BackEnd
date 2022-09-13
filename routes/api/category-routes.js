const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll()
  // console.log('category route for product data')
    // Associated Products data
    .then(dbProductData => res.json(dbProductData))
  console.log("ProductData ->", dbProductData)
    .catch(Error => {
      console.error(Error);
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne(req.params.id)
  console.log(req.params.id)
    // Associated Products data
    .then(dbProductData => res.json(dbProductData))
    .catch(Error => {
      console.error(Error);
    });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.id, {
    individualHooks: true,
    where: {
      id: res.params.id
    }
  })
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: "Category Data did not align properly" })
      }
    })
    .catch(Error => {
      res.status(500).json
    })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404)
        return;
      }
      res.json(dbProductData);
    })
    .catch(Error => {
      console.error(Error);
    });
});

module.exports = router;
