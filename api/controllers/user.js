const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  const createdUser = new User({ username, password });
  createdUser.save((err, createdUser) => {
    if (err) return res.send(err);
    res.json({ success: 'User Created', createdUser});
  });
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
};

module.exports = {
  createUser
};
