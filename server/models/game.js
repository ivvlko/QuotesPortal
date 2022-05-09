const mongoose = require("mongoose");

const GameSchema = mongoose.Schema({

  rightCount: {
    type: Number,
    required: true,
  },

  wrongCount: {
    type: Number,
    required: true
  },

  user: {
    type: mongoose.ObjectId,
    required: false,
  },

  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("game", GameSchema);