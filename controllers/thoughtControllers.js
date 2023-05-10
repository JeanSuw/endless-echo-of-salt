const {Thought, User} = require("../models");

module.exports = {
  async getThought(req, res) {
    try {
      const thoughtData = await Thought.find();
      res.json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
    },
  // Get one thought by id
  async getSingleThought(req, res) {
    try {
      const thoughtData = await Thought.findOne({ _id: req.params.id })
        .populate({
            path: "reactions",
            select: '-__v',
        })
        .select('-__v');
    
      if (!thoughtData) {
        return res.status(404).json({ message: 'No Thought with that ID' });
      }
    
      res.json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
    // Create a Thought
  async createThought(req, res) {
    try {
      const thoughtData  = await Thought.create(req.body);
      res.json(thoughtData);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete Thought
  async deleteThought(req, res) {
    try {
      const thoughtData = await Thought.findOneAndDelete({ _id: req.params.id });
    
      if (!thoughtData) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
    
      await User.findOneAndUpdate(
        { thoughts:params.id }, 
        { $pull: {thoughts: params.id} },
        { new: true }
        );
      res.json({ message: 'Thought and User are deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a Thought 
  async updateThought(req, res) {
    try {
      const thoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { runValidators: true, new: true }
      );
    
      if (!thoughtData) {
        return res.status(404).json({ message: 'No thoughtData with this id!' });
      }
    
      res.json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};