const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // Get all books from the book table
    Category.findAll().then((categoryData) => {
        res.json(categoryData);
    });
});

router.get('/:id', (req, res) => {

    Category.findOne(
        {
            where: {
                id: req.params.id
            },
        }
    ).then((categoryData) => {
        res.json(categoryData);
    });
});

router.post('/', (req, res) => {
    // Use Sequelize's `create()` method to add a row to the table
    // Similar to `INSERT INTO` in plain SQL
    Category.create({
        tag_name: req.body.tag_name,
    })
        .then((newCategory) => {
            // Send the newly created row as a JSON object
            res.json(newCategory);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
});

module.exports = router;