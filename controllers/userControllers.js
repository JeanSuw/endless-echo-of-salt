const {User, Thought} = require("../models");

module.exports = {
    // get all users
    async getUsers(req, res) {
      try {
        const userData = await User.find();
        res.json(userData);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // get a single user by its _id and populated thought and friend data
    async getSingleUser(req, res) {
      try {
        const userData = await User.findOne({ _id: req.params.userId })
          .select('-__v');
  
        if (!userData) {
          return res.status(404).json({ message: 'No user with that ID' });
        }
  
        res.json(userData);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // Post or create a new user    
    async createUser(req, res) {
      try {
        const userData = await User.create(req.body);
        res.json(userData);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // PUT to update a user by its _id
    async updateUser(req, res) {
        try {
          const userData = await User.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true }
          );
    
          if (!userData) {
            return res.status(404).json({ message: 'No user with this id!' });
          }
    
          res.json(userData);
        } catch (err) {
          res.status(500).json(err);
        }
    },
    
    // DELETE to remove user by its _id
    async deleteUsers(req, res) {
        try {
            const userData = await User.findOneAndDelete({ _id: req.params.id });
      
            if (!userData) {
              return res.status(404).json({ message: 'No User with that ID' });
            }
      
            await Thought.deleteMany({ _id: { $in: userData.thoughts} });
            res.json({ message: 'Both Thoughts and Users are deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
      },

  };