const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get("/", (req, res) => {
    Category.findAll({
        include: [Product,]
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "womp womp", err })
    })
})

router.get('/:id', (req, res) => {
    // find a single tag by its `id`
    // be sure to include its associated Product data
    Category.findOne({
        include: [Product,],
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "womp womp", err })
    })
});

router.post('/', (req, res) => {

    Category.create({
        category_name: req.body.category_name,
    })
        .then((newCategory) => {
            // Send the newly created row as a JSON object
            res.json(newCategory);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put("/:id", (req, res) => {
    Category.update({
        category_name: req.body.category_name,

    }, {
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "womp womp", err })
    })
})

router.delete('/:id', (req, res) => {
    Category.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "womp womp", err })
    })
})

module.exports = router;