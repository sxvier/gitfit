var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET all workouts */
router.get('/', async function (req, res, next) {
    
    db.Workout.findAll({
        where: { UserId: req.session.user.id }
    })
            .then(workout => {
                res.json(workout)
            })
});

router.post('/', async (req, res) => {
    if (!req.body.name || !req.body.reps || !req.body.start_date) {
        res.status(400).json({
            error: 'All fields required'
        })
        return
    }
    // find logged in user
    const user = await db.User.findByPk(req.session.user.id)

    // create new workout
    const workout = await user.createWorkout({
        name: req.body.name,
        reps: req.body.reps,
        start_date: req.body.start_date,
    })

    // send back response
    res.json(workout)
})

module.exports = router;
