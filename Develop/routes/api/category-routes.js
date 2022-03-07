// Left in comments from forked repo (starter code)
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({include: [Product]})
  .then(product => res.json(product))
  .catch(err => {
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({include: [Product],
    where: {
        id: req.params.id
    }
  })
  .then(product => res.json(product))
  .catch(err => {
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(
  {
    category_name: req.body.category_name
  }
  )
  .then(category => res.json(category))
  .catch(err => {
    res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
      id: req.params.id
      }
    }
  )
  .then(update => res.json(update))
  .catch(err => {
    res.status(500).json(err);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(
    {
      where: {
        id: req.params.id
      }
    })
    .then(remove => res.json(remove))
    .catch(err => {
      res.status(500).json(err);
    })
});

module.exports = router;