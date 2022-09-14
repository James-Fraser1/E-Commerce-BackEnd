const router = require('express').Router();
// const { RESERVED } = require('mysql2/lib/constants/client');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll()
  // be sure to include its associated Product data
  console.log('TAG ROUTE')
    .then(TagData => {
      res.json(TagData)
    })
  console.log("TagData ->", TagData)
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne()
  console.log('Find one tag')
  .then(TagData => {
    res.json(TagData)
  })
  .catch(Error => {
    console.error(Error);
  });
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
