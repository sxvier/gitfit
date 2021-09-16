var express = require('express');
const bcrypt = require('bcrypt')
var router = express.Router();
const db = require('../models');
const { Op } = require('sequelize')

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

module.exports = router;
