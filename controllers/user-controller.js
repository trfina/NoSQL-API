const { User } = require('../models');

const userController = {
  // the functions will go in here as methods:

  // get all users ==> GET /api/user
  getAllUser(req, res) {
    User.find({})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  
  // get one user by id ==> GET /api/user/:id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .then(dbUserData => {
        // If no user is found, send 404
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // create User ==> POST /api/user
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(400).json(err));
  }, 

  // update user by id ==> PUT /api/users/:id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
          }
          res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
    },

  // delete user ==> DELETE /api/users/:id
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err));
  }  
};

module.exports = userController;