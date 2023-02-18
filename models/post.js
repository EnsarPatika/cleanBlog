const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const postSchema = new Schema({
  title: String,
  detail: String,
  date: {
    type: Date,
    default: new Date().setHours(new Date().getHours() + 3),
  },
});

const post = mongoose.model('post', postSchema);

module.exports = post;
