var express = require('express');
const bcrypt = require('bcrypt')
var router = express.Router();
const db = require('../models');
const { Op } = require('sequelize');


/* Register new user */
router.post('/register', function (req, res, next) {
  // take username, password, and email
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400).json({
      error: 'Please include username, email and password'
    })
    return
  }
  // create a user
  // check if username is taken
  db.User.findOne({
    where: {
      [Op.or]: {
        username: req.body.username,
        email: req.body.email
      }

    }
  })
    .then((user) => {
      if(user) {
        res.status(400).json({
          error: 'Username or email taken'
        })
        return
      }
      // hash password
      bcrypt.hash(req.body.password, 10)
        .then((hash) => {
          // store in database
          db.User.create({
            username: req.body.username,
            email: req.body.email,
            password: hash
          })
            .then((user) => {
              // respond with success/error message
              res.status(201).json({
                success: 'User created'
              })
            })
        })
    })
});

router.post('/login', async (req, res) => {
  // check if username and password  exist
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400).json({
      error: 'Please include username, email and password'
    })
    return
  }

  // find user by username and email
  const user = await db.User.findOne({
    where: {
      [Op.or]: {
        username: req.body.username,
        email: req.body.email
      }
    }
  })

  if (!user) {
    res.status(400).json({
      error: 'Could not find user with that username or email'
    })
    return
  }

  // check password
  const success = await bcrypt.compare(req.body.password, user.password)
  if (!success) {
    res.status(401).json({
      error: 'Incorrect password'
    })
    return
  }
  // login
  req.session.user = user

  // extract password from user, assign all other properties to a new userData variable
  const { password, ...userData } = user.dataValues;

  // respond with success/error
  res.json({
    success: ' Successfully logged in',
    // send back user data that does not include password
    user: userData 
  })
})
// current
router.get('/current', async (req, res) => {
  const user = await db.User.findByPk(req.session.user.id)

  // extract password from user, assign all other to a new userData variable
  const { password, ...userData } = user.dataValues;

  // respond with success/error
  res.json(userData) // sending back userData which does not include password)
})

module.exports = router;
