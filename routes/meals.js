var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET all meals */
router.get('/', async function (req, res, next) {
    
    db.Meal.findAll({
        where: { UserId: req.params.userId }
    })
            .then(meal => {
                res.json(meal)
            })
});

router.post('/', async (req, res) => {
    if (!req.body.type || !req.body.name || !req.body.serving) {
        res.status(400).json({
            error: 'All fields required'
        })
        return
    }
    // find logged in user
    const user = await db.User.findByPk(req.session.user.id)

    // create new meal
    const meal = await user.createMeal({
        type: req.body.type,
        name: req.body.name,
        serving: req.body.serving,
    })

    // send back response
    res.json(meal)
})

module.exports = router;
